import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

import { addLocalStorage, getLocalStorage } from "@utils/local-storage";

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

  //timer 관련
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [remainTime, setRemainTime] = useState(initialTime);
  const timerRef = useRef(null);

  useEffect(() => {
    setCardState(deckInfo.data.map(() => "before"));
    setMatched(new Set());
    setRevealCard([]);
    setHistory([]);
    setSuccess(false);
    setGameOver(false);
    setRemainTime(initialTime);
    setStarted(false);
    clearTimeout(timerRef.current);
  }, [deckInfo, initialTime]);

  useEffect(() => {
    if (!started) return;
    if (gameOver) return;
    if (remainTime <= 0) {
      setGameOver(true);
      setSuccess(false);
      return;
    }
    timerRef.current = window.setTimeout(() => {
      setRemainTime((t) => t - 1);
    }, 1000);

    return () => window.clearTimeout(timerRef.current);
  }, [started, remainTime, gameOver]);

  useEffect(() => {
    if (matched.size === deckInfo.data.length && deckInfo.data.length > 0) {
      setGameOver(true);
      setSuccess(true);
      setMessage(INFO_MESSAGE.ready);
    }
  }, [matched, deckInfo.data.length]);

  useEffect(() => {
    if (!gameOver || !success) return;

    const clearTime = initialTime - remainTime;
    const now = new Date();

    const formattedTime = now.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const newRecord = {
      level: deckInfo.level,
      clearTime,
      recordTime: formattedTime,
    };

    const prevData = getLocalStorage();
    const updatedData = [...prevData, newRecord];

    const sorted = updatedData.sort((a, b) => {
      if (a.level !== b.level) return b.level - a.level;
      return a.clearTime - b.clearTime;
    });

    const ranked = sorted.map((item, idx) => ({
      ...item,
      rank: idx + 1,
    }));

    addLocalStorage(ranked);
  }, [gameOver, success]);

  const resetGame = () => {
    setCardState(deckInfo.data.map(() => "before"));
    setMatched(new Set());
    setHistory([]);
    setRevealCard([]);
    setSuccess(false);
    setGameOver(false);
    setRemainTime(initialTime);
    clearTimeout(timerRef.current);
  };

  const handleClickCard = (index, currentValue) => {
    if (cardState[index] !== "before") {
      setMessage(INFO_MESSAGE.alreadySelected);
      return;
    }

    if (!started) setStarted(true);

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
