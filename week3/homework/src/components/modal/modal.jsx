import { useCallback } from "react";
import { createPortal } from "react-dom";
import { useCountdown } from "src/hooks/use-count-down";

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
  isOpen,
  countInfo,
  onClose,
  handleReset,
  gameLevel,
  success,
  time,
}) => {
  const TEXT = success ? MODAL_TEXT.success : MODAL_TEXT.fail;

  const finishAndClose = useCallback(() => {
    handleReset?.();
    onClose?.();
  }, [handleReset, onClose]);

  const count = useCountdown({
    initial: countInfo,
    isActive: isOpen,
    onEnd: finishAndClose,
  });

  if (!isOpen) return null;

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
