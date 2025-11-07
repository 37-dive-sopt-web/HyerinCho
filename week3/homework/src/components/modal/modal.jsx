import * as styles from "./modal.css";

const Modal = ({ title, description, timeInfo }) => {
  return (
    <div className={styles.background}>
      <section className={styles.modalContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <p className={styles.timeInfo}>{timeInfo}</p>
      </section>
    </div>
  );
};

export default Modal;
