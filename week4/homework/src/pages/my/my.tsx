import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";

import { getUser, patchUser } from "@shared/apis/domain/user";
import type { UserResponse } from "@shared/apis/types/user";
import Button from "@shared/components/button/button";
import Header from "@shared/components/header/header";
import InfoBox from "@shared/components/info-box/info-box";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./my.css";

const My = () => {
  const [userInfo, setUserInfo] = useState<UserResponse | null>(null);
  const [isChange, setIsChange] = useState(false);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadData = async () => {
      if (!userId) {
        alert("로그인이 필요합니다.");
        return;
      }
      try {
        const data = await getUser(Number(userId));
        setUserInfo(data);
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message);
        }
      }
    };
    loadData();
  }, [userId]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserInfo((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        [name]: value,
      };
    });
    setIsChange(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!userInfo || !userId) {
      alert("사용자 정보가 올바르지 않습니다.");
      return;
    }

    try {
      const data = await patchUser(
        {
          name: userInfo.name,
          email: userInfo.email,
          age: Number(userInfo.age),
        },
        Number(userId),
      );

      alert("정보가 성공적으로 수정되었습니다.");

      setUserInfo(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <Header name={userInfo?.name} />
      <section className={styles.memberAllContainer}>
        <form className={styles.memberContainer} onSubmit={handleSubmit}>
          <h2 className={styles.title}>내 정보</h2>
          <InfoBox title="아이디" value={userInfo?.username} />
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>이름</p>
            <InputField
              name="name"
              value={userInfo?.name}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>이메일</p>
            <InputField
              name="email"
              value={userInfo?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>나이</p>
            <InputField
              name="age"
              value={userInfo?.age}
              onChange={handleInputChange}
            />
          </div>
          <Button disabled={!isChange} type="submit">
            확인
          </Button>
        </form>
      </section>
    </div>
  );
};

export default My;
