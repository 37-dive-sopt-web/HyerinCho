import { useState } from "react";

import { buildDeck } from "@utils/build-deck";

import Game from "../game/game";
import GameProgress from "../game-progress/game-progress";

import * as styles from "./game-board.css";

const GameBoard = () => {
  const [gameLevel, setGameLevel] = useState(1);
  const [deckInfo, setDeckInfo] = useState(() => ({
    status: "ready",
    data: buildDeck(1),
    level: 1,
  }));

  const handleChangeLevel = (nextLevel) => {
    setGameLevel(nextLevel);
  };

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
  };

  return (
    <main className={styles.gameBoardContainer}>
      <Game
        gameLevel={gameLevel}
        deckInfo={deckInfo}
        generateDeck={generateDeck}
      />
      <GameProgress
        gameLevel={gameLevel}
        onChangeLevel={handleChangeLevel}
        generateDeck={generateDeck}
      />
    </main>
  );
};

export default GameBoard;
