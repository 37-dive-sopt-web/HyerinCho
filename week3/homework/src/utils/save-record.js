import { addLocalStorage, getLocalStorage } from "./local-storage";

/**
 * 게임 클리어 기록을 저장합니다.
 * - level: 난이도
 * - clearTime: 초 단위 number (소수점 2자리까지 사용 가능)
 * - getLocalStorage/addLocalStorage: 외부 주입(I/O 분리)
 */
export function saveRecord(level, clearTime) {
  const format = (number) => Number(number.toFixed(2));
  const fixedTime = format(clearTime);

  const now = new Date();
  const recordTime = now.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });

  const newRecord = { level, clearTime: fixedTime, recordTime };

  const prev = getLocalStorage();
  const sorted = [...prev, newRecord].sort((a, b) =>
    a.level !== b.level ? b.level - a.level : a.clearTime - b.clearTime,
  );
  const ranked = sorted.map((item, idx) => ({ ...item, rank: idx + 1 }));

  addLocalStorage(ranked);
}
