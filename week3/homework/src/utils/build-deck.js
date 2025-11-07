import { shuffle } from "./suffle";

/**
 * 레벨별 덱을 만들어주는 함수
 * level: 1, 2, 3 중 하나
 * 반환값: [{ id: string, value: number }]
 */
export function buildDeck(level = 1) {
  const LEVEL_TO_GRID = { 1: [4, 4], 2: [4, 6], 3: [6, 6] };
  const [rows, cols] = LEVEL_TO_GRID[level] ?? [4, 4];
  const total = rows * cols;

  if (total % 2 !== 0) throw new Error("카드 개수는 짝수여야 해요.");

  const pairs = total / 2;
  const base = Array.from({ length: pairs }, (_, i) => i + 1);

  const duplicated = base.flatMap((v) => [
    { id: `${v}-a`, value: v },
    { id: `${v}-b`, value: v },
  ]);

  return shuffle(duplicated);
}
