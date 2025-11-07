/**
 * Fisher–Yates 셔플 함수
 * 배열의 순서를 무작위로 섞어 새로운 배열을 반환합니다.
 */
export function shuffle(array, rng = Math.random) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
