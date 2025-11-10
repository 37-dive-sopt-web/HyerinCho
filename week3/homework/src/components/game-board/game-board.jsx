import { useState } from "react";
import { useEffect } from "react";
import { useMatchGame } from "src/hooks/use-match-game";

import Modal from "@components/modal/modal";
import { buildDeck } from "@utils/build-deck";

import Game from "../game/game";
import GameProgress from "../game-progress/game-progress";

import * as styles from "./game-board.css";

const INITIAL_TIME_BY_LEVEL = {
  1: 45,
  2: 60,
  3: 100,
};

const GameBoard = () => {
  const [gameLevel, setGameLevel] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [deckInfo, setDeckInfo] = useState(() => ({
    status: "ready",
    data: buildDeck(1),
    level: 1,
  }));

  const initialTimeForLevel = INITIAL_TIME_BY_LEVEL[deckInfo.level];

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
  } = useMatchGame(deckInfo, initialTimeForLevel);

  useEffect(() => {
    if (gameOver) {
      setShowModal(true);
    }
  }, [gameOver]);

  const handleReset = () => {
    generateDeck(deckInfo.level);
    resetGame();
  };

  const generateDeck = (level = deckInfo.level) => {
    const data = buildDeck(level);
    setDeckInfo({ status: "ready", data, level });
  };

  const handleChangeLevel = (nextLevel) => {
    setGameLevel(nextLevel);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className={styles.gameBoardContainer}>
        <Game
          gameLevel={gameLevel}
          deckInfo={deckInfo}
          handleReset={handleReset}
          handleCardReveal={handleClickCard}
          cardState={cardState}
        />
        <GameProgress
          gameLevel={gameLevel}
          onChangeLevel={handleChangeLevel}
          generateDeck={generateDeck}
          remainCardPair={remainCardPair}
          successCardPair={successCardPair}
          allCardPair={allCardPair}
          history={history}
          remainTime={remainTime}
          message={message}
        />
        {showModal && (
          <Modal
            countInfo={3}
            onClose={closeModal}
            handleReset={handleReset}
            success={success}
            gameLevel={gameLevel}
            time={initialTimeForLevel - remainTime}
          />
        )}
      </main>
    </>
  );
};

export default GameBoard;
