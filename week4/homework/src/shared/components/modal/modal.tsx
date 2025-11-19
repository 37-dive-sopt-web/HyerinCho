import type { MouseEvent } from "react";

import * as styles from "./modal.css";

interface ModalProps {
  isOpen: boolean;
  handleDeleteClick: () => void;
  handleCancelClick: () => void;
}

const Modal = ({
  isOpen,
  handleDeleteClick,
  handleCancelClick,
}: ModalProps) => {
  const handlePreventClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  if (!isOpen) return;

  return (
    <div className={styles.overlay} onClick={handleCancelClick}>
      <section className={styles.modalContainer} onClick={handlePreventClick}>
        <p className={styles.title}>정말 탈퇴하시겠어요 ?</p>
        <p className={styles.content}>탈퇴 후에는 모든 정보가 삭제돼요</p>
        <div className={styles.buttonContainer}>
          <button className={styles.cancelButton} onClick={handleCancelClick}>
            취소
          </button>
          <button className={styles.confirmButton} onClick={handleDeleteClick}>
            회원 탈퇴
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
