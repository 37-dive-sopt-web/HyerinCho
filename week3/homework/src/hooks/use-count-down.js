import { useCallback, useEffect, useRef, useState } from "react";

/** 간단한 카운트다운 훅 (count만 반환) */
export function useCountdown({ initial, isActive, onEnd }) {
  const [count, setCount] = useState(initial);
  const timerRef = useRef(null);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(
    (value = initial) => {
      setCount(value);
      stop();
    },
    [initial, stop],
  );

  const tick = useCallback(() => {
    setCount((prev) => {
      if (prev <= 1) {
        stop();
        onEnd?.();
        return 0;
      }
      return prev - 1;
    });
  }, [onEnd, stop]);

  const start = useCallback(() => {
    stop();
    timerRef.current = setInterval(tick, 1000);
  }, [tick, stop]);

  useEffect(() => {
    if (isActive) {
      reset(initial);
      start();
    } else {
      stop();
    }
    return stop;
  }, [isActive, initial, reset, start, stop]);

  return count;
}
