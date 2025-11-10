import { useState } from "react";

import { getLocalStorage, resetLocalStorage } from "@utils/local-storage";

import Lank from "./rank/rank";

import * as styles from "./ranking-borad.css";

const RankingBoard = () => {
  const [rankingData, setRankingData] = useState(() => getLocalStorage());

  const handleResetRecord = () => {
    resetLocalStorage();
    setRankingData([]);
  };

  return (
    <main className={styles.boardContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.gameTitle}>랭킹 보드</h2>
        <button className={styles.button} onClick={handleResetRecord}>
          기록 초기화
        </button>
      </div>
      <table className={styles.tableAllContainer}>
        <thead className={styles.tableHeaderContainer}>
          <tr>
            <th className={styles.tableHeader}>순위</th>
            <th className={styles.tableHeader}>레벨</th>
            <th className={styles.tableHeader}>클리어 시간(초)</th>
            <th className={styles.tableHeader}>기록 시각</th>
          </tr>
        </thead>
        <tbody>
          {rankingData.map(({ clearTime, level, recordTime, rank }) => (
            <>
              <Lank
                rank={rank}
                level={level}
                clearTime={clearTime}
                recordTime={recordTime}
              />
            </>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default RankingBoard;
