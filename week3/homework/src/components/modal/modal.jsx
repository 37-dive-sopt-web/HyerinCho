import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createPortal } from "react-dom";

import * as styles from "./modal.css";

const MODAL_TEXT = (success) => {
  const type = success ? "success" : "fail";

  const TEXT_MAP = {
    success: {
      title: "축하해요!!!",
      getLine1: (gameLevel, time) =>
        `Level ${gameLevel}을 ${time}초 만에 클리어했어요`,
      getLine2: (count) => `${count}초 후 자동으로 새 게임을 시작해요`,
    },
    fail: {
      title: "시간 초과",
      getLine1: (gameLevel, time) =>
        `Level ${gameLevel}에서 ${time}초로 시간이 모두 소진됐어요`,
      getLine2: (count) => `${count}초 후 자동으로 다시 시도해요`,
    },
  };

  return TEXT_MAP[type];
};
const Modal = ({
  countInfo,
  onClose,
  handleReset,
  gameLevel,
  success,
  time,
}) => {
  const [count, setCount] = useState(countInfo);
  const TEXT = MODAL_TEXT(success);

  const handleClose = useCallback(() => {
    handleReset?.();
    onClose?.();
  }, [handleReset, onClose]);

  useEffect(() => {
    // 1초마다 count 감소, 0이 되면 닫기
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          handleClose(); // 여기서 리셋 + onClose
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(id);
  }, [handleClose]);

  return createPortal(
    <div className={styles.background}>
      <section
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={styles.title}>{TEXT.title}</p>
        <p className={styles.description}>{TEXT.getLine1(gameLevel, time)}</p>
        <p className={styles.timeInfo}>{TEXT.getLine2(count)}</p>
      </section>
    </div>,
    document.body,
  );
};
export default Modal;
