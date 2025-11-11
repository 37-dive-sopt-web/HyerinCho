import * as styles from "./game-info.css";

const GameInfo = ({ title, children }) => {
  return (
    <div className={styles.recentProgress}>
      <p>{title}</p>
      <span className={styles.recentProgressNumber}>{children}</span>
    </div>
  );
};

export default GameInfo;
