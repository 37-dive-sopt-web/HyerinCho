import { type ChangeEventHandler, useState } from "react";

import * as styles from "./input-field.css";

interface InputFieldProps {
  name?: string;
  placeHolder?: string;
  value?: string | number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isEyeIcon?: boolean;
}

const InputField = ({
  name,
  placeHolder,
  value,
  onChange,
  isEyeIcon = false,
}: InputFieldProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  const inputType = !isEyeIcon ? "text" : visible ? "text" : "password";

  return (
    <>
      <div className={styles.inputContainer}>
        <input
          name={name}
          type={inputType}
          className={styles.input}
          value={value}
          onChange={onChange}
          placeholder={placeHolder}
        />
        {isEyeIcon && (
          <button
            type="button"
            onClick={toggleVisible}
            aria-label={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
          >
            {visible ? (
              <img className={styles.image} src="/open-eyes.png" />
            ) : (
              <img className={styles.image} src="/hide-eyes.png" />
            )}
          </button>
        )}
      </div>
    </>
  );
};

export default InputField;
