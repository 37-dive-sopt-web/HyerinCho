import type { ChangeEvent } from "react";

import Button from "@shared/components/button/button";
import InputField from "@shared/components/input-field/input-field";

import * as styles from "./step.css";

interface IdProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  next: () => void;
  errorMessage: string;
}

const Id = ({ id, onChange, next, errorMessage }: IdProps) => {
  return (
    <section>
      <div className={styles.filedContainer}>
        <p className={styles.inputTitle}>아이디</p>
        <InputField
          name="id"
          placeHolder="아이디를 입력해주세요"
          value={id}
          onChange={onChange}
        />
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      <Button type="button" onClick={next} disabled={!id}>
        다음
      </Button>
    </section>
  );
};

export default Id;
