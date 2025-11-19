import { useNavigate } from "react-router";
import { routePath } from "src/routers/path";

import { deleteUser } from "@shared/apis/domain/user";

import * as styles from "./header.css";

interface HeaderProps {
  name?: string;
}

const Header = ({ name }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    localStorage.removeItem("userId");
    navigate(routePath.LOGIN);
    alert("로그아웃 되었습니다.");
  };

  const handleUserDelete = async () => {
    if (!window.confirm("정말로 탈퇴하시겠습니까? 데이터는 영구 삭제됩니다.")) {
      return;
    }
    const userId = localStorage.getItem("userId");

    if (!userId) return;

    try {
      await deleteUser(Number(userId));

      localStorage.removeItem("userId");
      alert("탈퇴 처리가 완료되었습니다.");

      navigate(routePath.LOGIN);
    } catch (error) {
      if (error instanceof Error) {
        alert("탈퇴 실패: " + error.message);
      }
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.title}>마이페이지</h1>
        <p className={styles.helloInfo}>안녕하세요, {name}님</p>
      </div>
      <div className={styles.rightContainer}>
        <button onClick={() => navigate(routePath.MY)}>내 정보</button>
        <button onClick={() => navigate(routePath.MEMBERS)}>회원조희</button>
        <button onClick={handleLogoutClick}>로그아웃</button>
        <button onClick={handleUserDelete}>회원탈퇴</button>
      </div>
    </header>
  );
};

export default Header;
