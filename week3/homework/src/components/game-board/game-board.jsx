import { useEffect, useState } from "react";
import { useMatchGame } from "src/hooks/use-match-game";

import Modal from "@components/modal/modal";
import { buildDeck } from "@utils/build-deck";

import Game from "./game/game";
import GameProgress from "./game-progress/game-progress";

import * as styles from "./game-board.css";

const LEVEL_TIME = {
  1: 45,
  2: 60,
  3: 100,
};

const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [deckInfo, setDeckInfo] = useState(() => ({
    status: "ready",
    data: buildDeck(1),
    level: 1,
  }));

  const initialTime = LEVEL_TIME[level];

  const {
    resetGame,
    handleClickCard,
    cardState,
    history,
    allCardPair,
    successCardPair,
    remainCardPair,
    remainTime,
    gameOver,
    success,
    message,
  } = useMatchGame(deckInfo, initialTime);

  useEffect(() => {
    if (gameOver) {
      setShowModal(true);
    }
  }, [gameOver]);

  const generateDeck = (nextLevel) => {
    const data = buildDeck(nextLevel);
    const nextDeck = { status: "ready", data, level: nextLevel };
    setDeckInfo(nextDeck);
    resetGame(nextDeck, LEVEL_TIME[nextLevel]);
  };

  const handleReset = () => {
    generateDeck(level);
  };

  const handleChangeLevel = (nextLevel) => {
    if (nextLevel === level) return;
    setLevel(nextLevel);
    generateDeck(nextLevel);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const time = Number((initialTime - remainTime).toFixed(2));

  return (
    <>
      <main className={styles.gameBoardContainer}>
        <Game
          gameLevel={level}
          deckInfo={deckInfo}
          handleReset={handleReset}
          handleCardReveal={handleClickCard}
          cardState={cardState}
        />
        <GameProgress
          gameLevel={level}
          onChangeLevel={handleChangeLevel}
          generateDeck={generateDeck}
          remainCardPair={remainCardPair}
          successCardPair={successCardPair}
          allCardPair={allCardPair}
          history={history}
          remainTime={remainTime}
          message={message}
        />
      </main>
      <Modal
        isOpen={showModal}
        countInfo={3}
        onClose={closeModal}
        handleReset={handleReset}
        success={success}
        gameLevel={level}
        time={time}
      />
    </>
  );
};

export default GameBoard;
