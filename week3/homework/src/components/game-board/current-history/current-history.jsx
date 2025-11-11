import * as styles from "./current-history.css";

const CurrentHistory = ({ successState, firstCard, secondCard }) => {
  return (
    <div className={styles.currentHistoryContainer}>
      <p className={styles.cardValue({ successState })}>
        {firstCard}, {secondCard}
      </p>
      {successState ? <p>성공</p> : <p>실패</p>}
    </div>
  );
};

export default CurrentHistory;
