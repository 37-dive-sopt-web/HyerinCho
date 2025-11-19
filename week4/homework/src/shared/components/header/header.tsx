import { useState } from "react";
import { useNavigate } from "react-router";
import { routePath } from "src/routers/path";

import { deleteUser } from "@shared/apis/domain/user";

import Modal from "../modal/modal";

import * as styles from "./header.css";

interface HeaderProps {
  name?: string;
}

const Header = ({ name }: HeaderProps) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoutClick = () => {
    localStorage.removeItem("userId");
    navigate(routePath.LOGIN);
    alert("로그아웃 되었습니다.");
  };

  const handleUserDelete = async () => {
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

  const handleUserDeleteButton = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = async () => {
    await handleUserDelete();
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        handleCancelClick={handleCancelClick}
        handleDeleteClick={handleDeleteClick}
      />
      <header className={styles.headerContainer}>
        <div className={styles.leftContainer}>
          <h1 className={styles.title}>마이페이지</h1>
          <p className={styles.helloInfo}>안녕하세요, {name}님</p>
        </div>
        <div className={styles.rightContainer}>
          <button onClick={() => navigate(routePath.MY)}>내 정보</button>
          <button onClick={() => navigate(routePath.MEMBERS)}>회원조희</button>
          <button onClick={handleLogoutClick}>로그아웃</button>
          <button onClick={handleUserDeleteButton}>회원탈퇴</button>
        </div>
      </header>
    </>
  );
};

export default Header;
