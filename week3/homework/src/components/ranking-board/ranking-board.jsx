import History from "@components/history/history";

import * as styles from "./ranking-borad.css";

const RankingBoard = () => {
  return (
    <main className={styles.boardContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.gameTitle}>랭킹 보드</h2>
        <button className={styles.button}>기록 초기화</button>
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
          <History
            rank={1}
            level={1}
            clearTime={21.96}
            recordTime={"2025.11.1 오전 1:58:34"}
          />
          <History
            rank={1}
            level={1}
            clearTime={21.96}
            recordTime={"2025.11.1 오전 1:58:34"}
          />
        </tbody>
      </table>
    </main>
  );
};

export default RankingBoard;
