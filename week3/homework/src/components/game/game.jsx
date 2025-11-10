import Card from "@components/card/card";

import * as styles from "./game.css";

const Game = ({ deckInfo, cardState, handleReset, handleCardReveal }) => {
  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameTitleContainer}>
        <p className={styles.gameTitle}>게임 보드</p>
        <button className={styles.button} onClick={handleReset}>
          게임 리셋
        </button>
      </div>
      <div className={styles.cardContainer({ level: deckInfo.level })}>
        {deckInfo.data.map((data, index) => (
          <Card
            key={data.id}
            cardValue={data.value}
            cardState={cardState[index]}
            onClick={() => handleCardReveal(index, data.value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
