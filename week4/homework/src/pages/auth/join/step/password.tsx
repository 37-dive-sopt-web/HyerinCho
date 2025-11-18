import type { ChangeEvent } from "react";

import Button from "@shared/components/button/button";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./step.css";

interface PasswordProps {
  password: string;
  passwordConfirm: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  next: () => void;
  errorMessage: string;
  isMatch: boolean;
}

const Password = ({
  password,
  passwordConfirm,
  onChange,
  next,
  errorMessage,
  isMatch,
}: PasswordProps) => {
  return (
    <section>
      <div className={styles.filedContainer}>
        <p className={styles.inputTitle}>비밀번호</p>
        <InputField
          name="password"
          placeHolder="비밀번호 입력해주세요"
          value={password}
          onChange={onChange}
        />
      </div>
      <div className={styles.filedContainer}>
        <p className={styles.inputTitle}>비밀번호 확인</p>
        <InputField
          name="passwordConfirm"
          placeHolder="비밀번호 확인"
          value={passwordConfirm}
          onChange={onChange}
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Button type="button" onClick={next} disabled={!isMatch}>
        다음
      </Button>
    </section>
  );
};

export default Password;
