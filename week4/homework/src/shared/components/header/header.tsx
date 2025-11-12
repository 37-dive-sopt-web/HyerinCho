import * as styles from "./header.css";

interface Props {
  name: string;
  onClick: () => void;
}

const Header = ({ name, onClick }: Props) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>마이페이지</h1>
        <p className={styles.helloInfo}>안녕하세요, {name}님</p>
      </div>
      <div className={styles.rightContainer}>
        <button onClick={onClick}>내 정보</button>
        <button onClick={onClick}>회원조희</button>
        <button onClick={onClick}>로그아웃</button>
        <button onClick={onClick}>회원탈퇴</button>
      </div>
    </header>
  );
};

export default Header;
