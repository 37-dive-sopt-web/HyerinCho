import { useState } from "react";

import { getUser } from "@shared/apis/domain/user";
import type { UserResponse } from "@shared/apis/types/user";
import Button from "@shared/components/button/button";
import Header from "@shared/components/header/header";
import InfoBox from "@shared/components/info-box/info-box";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./member.css";

const Member = () => {
  const [memberId, setMemberId] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async () => {
    if (!memberId) {
      alert("값을 입력해주세요");
      return;
    }
    try {
      const data = await getUser(Number(memberId));

      setUserInfo(data);
    } catch (error) {
      if (error instanceof Error) {
        setUserInfo(null);
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <>
      <Header name="조혜린" />
      <section className={styles.memberAllContainer}>
        <div className={styles.memberContainer}>
          <h2 className={styles.title}>회원 조회</h2>
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>회원 ID</p>
            <InputField
              placeHolder="숫자만 입력"
              value={memberId ?? ""}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <Button disabled={!memberId} onClick={handleSubmit}>
            확인
          </Button>
          {userInfo ? (
            <div className={styles.infoBoxContainer}>
              <InfoBox title="이름" value={userInfo.name} />
              <InfoBox title="아이디" value={userInfo.username} />
              <InfoBox title="이메일" value={userInfo.email} />
              <InfoBox title="나이" value={userInfo.age} />
            </div>
          ) : (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Member;
