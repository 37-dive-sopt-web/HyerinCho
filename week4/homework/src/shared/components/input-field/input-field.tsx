import type { ChangeEventHandler } from "react";

import * as styles from "./input-field.css";

interface Props {
  name?: string;
  placeHolder: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputField = ({
  name,
  placeHolder,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <>
      <input
        name={name}
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
