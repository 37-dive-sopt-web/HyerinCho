import * as styles from "./card.css";

const Card = ({ cardValue, cardState, onClick }) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.card({ cardState })}>
        <p className={styles.cardFront}>?</p>
        <p className={styles.cardBack({ cardState })}>{cardValue}</p>
      </div>
    </div>
  );
};

export default Card;
