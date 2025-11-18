import type { ChangeEvent } from "react";

import Button from "@shared/components/button/button";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./step.css";

interface PasswordProps {
  name: string;
  email: string;
  age: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const Info = ({ name, email, age, onChange, onSubmit }: PasswordProps) => {
  return (
    <section>
      <div>
        <div className={styles.filedContainer}>
          <p className={styles.inputTitle}>이름</p>
          <InputField
            name="name"
            placeHolder="이름을 입력해주세요"
            value={name}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <div className={styles.filedContainer}>
          <p className={styles.inputTitle}>이메일</p>
          <InputField
            name="email"
            placeHolder="이메일을 입력해주세요"
            value={email}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <div className={styles.filedContainer}>
          <p className={styles.inputTitle}>나이</p>
          <InputField
            name="age"
            placeHolder="나이를 입력해주세요"
            value={age}
            onChange={onChange}
          />
        </div>
      </div>
      <Button
        type="button"
        onClick={onSubmit}
        disabled={!name || !email || !age}
      >
        다음
      </Button>
    </section>
  );
};

export default Info;
