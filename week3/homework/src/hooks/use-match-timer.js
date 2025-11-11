import { useEffect, useRef, useState } from "react";

/**
 * useMatchGame 전용 카운트다운 타이머 훅입니다.
 * - 외부에서 start/stop/reset만 제어
 * - 남은 시간만 관리하고 게임 종료 판정은 바깥에서 진행
 */
export const useMatchTimer = (initialTime) => {
  const format = (time) => Number(parseFloat(time).toFixed(2));

  const [remainTime, setRemainTime] = useState(format(initialTime));
  const [started, setStarted] = useState(false);

  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  const update = (nowTime) => {
    if (startTimeRef.current == null) return;

    const elapsed = (nowTime - startTimeRef.current) / 1000;
    const remain = Math.max(initialTime - elapsed, 0);
    setRemainTime(format(remain));

    if (remain > 0) {
      rafRef.current = requestAnimationFrame(update);
    } else {
      setStarted(false);
      rafRef.current = null;
    }
  };

  const start = () => {
    if (started) return;
    setStarted(true);

    setRemainTime(format(initialTime));
    startTimeRef.current = performance.now();
    rafRef.current = requestAnimationFrame(update);
  };

  const stop = () => {
    if (!startTimeRef.current) return remainTime;

    const now = performance.now();
    const elapsed = (now - startTimeRef.current) / 1000;
    const remain = initialTime - elapsed;
    const finalRemain = format(remain);

    setRemainTime(finalRemain);
    setStarted(false);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    return finalRemain;
  };

  const reset = () => {
    stop();
    setRemainTime(format(initialTime));
    startTimeRef.current = null;
  };

  useEffect(() => {
    setRemainTime(format(initialTime));
    startTimeRef.current = null;
  }, [initialTime]);

  useEffect(() => () => stop(), []);

  return { remainTime, started, start, stop, reset };
};
