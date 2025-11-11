import { useEffect, useState } from "react";
import { useRef } from "react";

import { saveRecord } from "@utils/save-record";

import { useMatchTimer } from "./use-match-timer";

const MISMATCH_DELAY = 700;

const INFO_MESSAGE = {
  ready: "카드를 눌러 게임 시작",
  alreadySelected: "이미 선택된 카드에요",
  success: "성공 !",
  fail: "실패 !",
  waiting: "잠시만 기다려주세요",
};

export const useMatchGame = (deckInfo, initialTime) => {
  const [cardState, setCardState] = useState(deckInfo.data.map(() => "before"));
  const [matched, setMatched] = useState(() => new Set());
  const [revealCard, setRevealCard] = useState([]);
  const [history, setHistory] = useState([]);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState(INFO_MESSAGE.ready);
  const [gameOver, setGameOver] = useState(false);
  const savedOnceRef = useRef(false);
  const finalRemainRef = useRef(null);

  //timer 관련
  const {
    remainTime,
    started,
    start,
    stop,
    reset: resetTimer,
  } = useMatchTimer(initialTime);

  // 시간 종료 시 패배 처리
  useEffect(() => {
    if (!started) return;
    if (gameOver) return;
    if (remainTime > 0) return;
    stop();
    setSuccess(false);
    setGameOver(true);
  }, [remainTime, started, gameOver, stop]);

  // 모든 카드 매칭 시 승리 처리
  useEffect(() => {
    if (matched.size === deckInfo.data.length && deckInfo.data.length > 0) {
      const finalRemain = stop();
      finalRemainRef.current = finalRemain;
      setSuccess(true);
      setGameOver(true);
      setMessage(INFO_MESSAGE.ready);
    }
  }, [matched, deckInfo.data.length, stop]);

  // 승리 확정 시 기록 저장
  useEffect(() => {
    if (!gameOver || !success) return;
    if (savedOnceRef.current) return; // 이미 저장했다면 무시
    savedOnceRef.current = true;

    const finalRemain = finalRemainRef.current ?? remainTime;
    const clearTime = Number((initialTime - finalRemain).toFixed(2));
    saveRecord(deckInfo.level, clearTime);
  }, [gameOver, success]);

  // 게임 상태 초기화
  const resetGame = (
    nextDeckInfo = deckInfo,
    nextInitialTime = initialTime,
  ) => {
    setCardState(nextDeckInfo.data.map(() => "before"));
    setMatched(new Set());
    setHistory([]);
    setRevealCard([]);
    setSuccess(false);
    setGameOver(false);
    resetTimer(nextInitialTime);
    savedOnceRef.current = false;
  };

  // 카드 클릭 처리
  const handleClickCard = (index, currentValue) => {
    if (cardState[index] !== "before") {
      setMessage(INFO_MESSAGE.alreadySelected);
      return;
    }

    if (!started) start();

    if (revealCard.length === 0) {
      setRevealCard([{ index, value: currentValue }]);
      setCardState((prev) => {
        const copy = prev.slice();
        copy[index] = "progress";
        return copy;
      });
      setMessage(INFO_MESSAGE.waiting);
      return;
    }

    if (revealCard.length === 1) {
      const firstCard = revealCard[0];
      const secondCard = { index, value: currentValue };

      setCardState((prev) => {
        const copy = prev.slice();
        copy[index] = "progress";
        return copy;
      });

      setRevealCard([firstCard, secondCard]);

      const compareResult = firstCard.value === secondCard.value;
      setHistory((prev) => [
        { value: [firstCard.value, secondCard.value], result: compareResult },
        ...prev,
      ]);

      if (compareResult) {
        setMessage(INFO_MESSAGE.success);
        setCardState((prev) => {
          const copy = prev.slice();
          copy[firstCard.index] = "success";
          copy[secondCard.index] = "success";
          setSuccess(true);
          return copy;
        });
        setMatched((prev) => {
          const next = new Set(prev);
          next.add(firstCard.index);
          next.add(secondCard.index);
          return next;
        });
        setRevealCard([]);
      }

      if (!compareResult) {
        // 불일치 시 딜레이 뒤 뒤집기
        setMessage(INFO_MESSAGE.fail);
        setTimeout(() => {
          setCardState((prev) => {
            const copy = prev.slice();
            if (copy[firstCard.index] === "progress")
              copy[firstCard.index] = "before";
            if (copy[secondCard.index] === "progress")
              copy[secondCard.index] = "before";
            return copy;
          });
          setRevealCard([]);
          setMessage(INFO_MESSAGE.waiting);
        }, MISMATCH_DELAY);
      }
    }
  };

  const allCardPair = deckInfo.data.length / 2;
  const successCardPair = matched.size / 2 || 0;
  const remainCardPair = allCardPair - successCardPair;

  return {
    resetGame,
    handleClickCard,
    cardState,
    history,
    matched,
    allCardPair,
    successCardPair,
    remainCardPair,
    remainTime,
    gameOver,
    success,
    message,
  };
};
