import * as styles from "./rank.css";

const Lank = ({ rank, level, clearTime, recordTime }) => {
  return (
    <tr className={styles.tableBodyContainer}>
      <td className={styles.tableBody}>{rank}</td>
      <td className={styles.tableBody}>Level {level}</td>
      <td className={styles.tableBody}>{clearTime}</td>
      <td className={styles.tableBody}>{recordTime}</td>
    </tr>
  );
};

export default Lank;
