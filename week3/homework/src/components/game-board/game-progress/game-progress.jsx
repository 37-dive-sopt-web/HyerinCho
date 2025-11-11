import CurrentHistory from "../current-history/current-history";

import * as styles from "./game-prgress.css";

const GameProgress = ({
  history,
  infoMessage,
  remainTime,
  allCardPair,
  successCardPair,
  remainCardPair,
  gameLevel,
  onChangeLevel,
  generateDeck,
  message,
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
          <span className={styles.recentProgressNumber}>
            {remainTime.toFixed(2)}
          </span>
        </div>
        <div className={styles.recentProgress}>
          <p>성공한 짝</p>
          <p className={styles.recentProgressNumber}>
            {successCardPair}/{allCardPair}
          </p>
        </div>
        <div className={styles.recentProgress}>
          <p>남은 짝</p>
          <p className={styles.recentProgressNumber}>{remainCardPair}</p>
        </div>
      </div>
      <>
        <p className={styles.title}>안내 메시지</p>
        <div className={styles.descriptionContainer}>
          {infoMessage ? (
            <p className={styles.description}>{infoMessage}</p>
          ) : (
            <p className={styles.description}>{message}</p>
          )}
        </div>
      </>
      <>
        <p className={styles.title}>최근 히스토리</p>
        <div
          className={styles.currentHistoryContainer({
            history: history.length === 0 ? false : true,
          })}
        >
          {history.length === 0 ? (
            <p className={styles.historyInfoText}>아직 뒤집은 카드가 없어요</p>
          ) : (
            <>
              {history.map((data, index) => (
                <CurrentHistory
                  key={index}
                  firstCard={data.value[0]}
                  secondCard={data.value[1]}
                  successState={data.result}
                />
              ))}
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default GameProgress;
