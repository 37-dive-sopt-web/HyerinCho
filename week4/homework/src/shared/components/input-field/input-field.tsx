import type { ChangeEventHandler } from "react";

import * as styles from "./input-field.css";

interface Props {
  placeHolder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({ placeHolder, value, onChange, ...props }: Props) => {
  return (
    <>
      <input
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        {...props}
      />
    </>
  );
};

export default InputField;
