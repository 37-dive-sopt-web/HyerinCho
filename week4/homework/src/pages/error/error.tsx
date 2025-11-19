import * as styles from "./error.css";

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <section>
        <p className={styles.errorCode}>404</p>
        <p className={styles.errorMessage}>잘못된 페이지에요</p>
        <p className={styles.errorMessage}>경로를 다시 한 번 확인해주세요 !</p>
      </section>
    </div>
  );
};

export default Error;
