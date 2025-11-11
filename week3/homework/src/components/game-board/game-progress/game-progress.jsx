import CurrentHistory from "../current-history/current-history";
import GameInfo from "../game-info/game-info";

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
  message,
}) => {
  const handleSelect = (e) => {
    const value = Number(e.target.value);
    onChangeLevel(value);
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
        <GameInfo title="남은시간">{remainTime}</GameInfo>
        <GameInfo title="성공한 짝">
          {successCardPair}/{allCardPair}
        </GameInfo>
        <GameInfo title="남은 짝">{remainCardPair}</GameInfo>
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
