import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { createPortal } from "react-dom";

import * as styles from "./modal.css";

const MODAL_TEXT = {
  success: {
    title: "축하해요!!!",
    description: (gameLevel, time) =>
      `Level ${gameLevel}을 ${time}초 만에 클리어했어요`,
    alert_info: (count) => `${count}초 후 자동으로 새 게임을 시작해요`,
  },
  fail: {
    title: "시간 초과",
    description: (gameLevel, time) =>
      `Level ${gameLevel}에서 ${time}초로 시간이 모두 소진됐어요`,
    alert_info: (count) => `${count}초 후 자동으로 다시 시도해요`,
  },
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
  const TEXT = success ? MODAL_TEXT.success : MODAL_TEXT.fail;

  const handleClose = useCallback(() => {
    handleReset?.();
    onClose?.();
  }, [handleReset, onClose]);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          handleClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [handleClose]);

  return createPortal(
    <div className={styles.background}>
      <section
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={styles.title}>{TEXT.title}</p>
        <p className={styles.description}>
          {TEXT.description(gameLevel, time)}
        </p>
        <p className={styles.timeInfo}>{TEXT.alert_info(count)}</p>
      </section>
    </div>,
    document.body,
  );
};
export default Modal;
