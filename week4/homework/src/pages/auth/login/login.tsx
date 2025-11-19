import { type ChangeEvent, type FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { routePath } from "src/routers/path";

import { postLogin } from "@shared/apis/domain/auth";
import Button from "@shared/components/button/button";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./login.css";

const Login = () => {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleChangeId = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const data = await postLogin({
        username: id,
        password: password,
      });
      localStorage.setItem("userId", String(data.userId));

      alert(data.message);
      navigate(routePath.MY);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className={styles.loginAllContainer}>
      <div className={styles.loginBoxContainer}>
        <h2 className={styles.title}>로그인</h2>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>아이디</p>
            <InputField
              placeHolder="아이디를 입력해주세요"
              value={id}
              onChange={handleChangeId}
            />
          </div>
          <div className={styles.filedContainer}>
            <p className={styles.inputTitle}>비밀번호</p>
            <InputField
              placeHolder="비밀번호를 입력해주세요"
              value={password}
              onChange={handleChangePassword}
              isEyeIcon
            />
          </div>
          <Button type="submit" disabled={!id || !password}>
            로그인
          </Button>
        </form>
        <button
          type="button"
          className={styles.joinText}
          onClick={() => navigate(routePath.JOIN)}
        >
          회원가입
        </button>
      </div>
    </section>
  );
};

export default Login;
