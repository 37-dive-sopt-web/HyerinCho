import { useState } from "react";

import Card from "@components/card/card";

import * as styles from "./game.css";

const Game = ({ deckInfo, generateDeck }) => {
  const [cardState, setCardState] = useState(deckInfo.data.map(() => "before"));

  const handleCardReveal = (index) => {
    setCardState((prev) => {
      if (prev[index] !== "before") return prev;
      const next = [...prev];
      next[index] = "progress";
      return next;
    });
  };

  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameTitleContainer}>
        <p className={styles.gameTitle}>게임 보드</p>
        <button
          className={styles.button}
          onClick={() => generateDeck(deckInfo.level)}
        >
          게임 리셋
        </button>
      </div>
      <div className={styles.cardContainer({ level: deckInfo.level })}>
        {deckInfo.data.map((data, index) => (
          <Card
            key={data.id}
            cardValue={data.value}
            cardState={cardState[index]}
            onClick={() => handleCardReveal(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Game;
