import * as styles from "./header.css";

const Header = ({ active, onClick }) => {
  return (
    <section className={styles.headerContainer}>
      <h1 className={styles.title}>숫자 카드 짝 맞추기</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button({ active })} onClick={onClick}>
          게임
        </button>
        <button
          className={styles.button({ active: !active })}
          onClick={onClick}
        >
          랭킹
        </button>
      </div>
    </section>
  );
};

export default Header;
