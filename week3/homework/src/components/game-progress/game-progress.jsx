import * as styles from "./game-prgress.css";

const GameProgress = ({
  history,
  infoMessage,
  remainingTime = 8,
  successCard = 4,
  remainCard = 8,
  gameLevel,
  onChangeLevel,
  generateDeck,
}) => {
  const handleSelect = (e) => {
    const value = Number(e.target.value);
    onChangeLevel(value);
    generateDeck(value);
  };

  return (
    <div className={styles.gameProgressContainer}>
      <select
        className={styles.levelSelect}
        value={gameLevel}
        onChange={handleSelect}
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
      </select>
      <div className={styles.recentProgressContainer}>
        <div className={styles.recentProgress}>
          <p>남은 시간</p>
          <p className={styles.recentProgressNumber}>{remainingTime}</p>
        </div>
        <div className={styles.recentProgress}>
          <p>성공한 짝</p>
          <p className={styles.recentProgressNumber}>{successCard}/8</p>
        </div>
        <div className={styles.recentProgress}>
          <p>남은 짝</p>
          <p className={styles.recentProgressNumber}>{remainCard}</p>
        </div>
      </div>
      <>
        <p className={styles.title}>안내 메시지</p>
        <div className={styles.descriptionContainer}>
          {infoMessage ? (
            <p className={styles.description}>{infoMessage}</p>
          ) : (
            <p className={styles.description}>카드를 눌러 게임을 시작</p>
          )}
        </div>
      </>
      <>
        <p className={styles.title}>최근 히스토리</p>
        <div
          className={styles.historyContainer({
            history: history ? true : false,
          })}
        >
          {history ? (
            <></>
          ) : (
            <p className={styles.historyInfoText}>아직 뒤집은 카드가 없어요</p>
          )}
        </div>
      </>
    </div>
  );
};

export default GameProgress;
