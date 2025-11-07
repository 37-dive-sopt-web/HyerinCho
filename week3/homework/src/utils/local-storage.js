const RANKING_HISTORY_KEY = "ranking_history";

/**
 * 로컬스토리지에서 랭킹 히스토리 가져오기
 * @returns {Array} 저장된 배열 (없으면 빈 배열)
 */
export const getLocalStorage = () => {
  const data = localStorage.getItem(RANKING_HISTORY_KEY);
  return data ? JSON.parse(data) : [];
};

/**
 * 새로운 값 추가
 * @param {string} value 추가할 랭킹 값 (trim 자동 처리)
 */
export const addLocalStorage = (value) => {
  const addValue = value.trim();
  if (!addValue) {
    return;
  }
  const data = getLocalStorage();
  const newData = [...data, addValue];
  localStorage.setItem(RANKING_HISTORY_KEY, JSON.stringify(newData));
};

/**
 * 전체 초기화 (리셋)
 */
export const resetLocalStorage = () => {
  localStorage.removeItem(RANKING_HISTORY_KEY);
};
