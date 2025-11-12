import type { ButtonHTMLAttributes, ReactNode } from "react";

import * as styles from "./button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({ disabled = false, onClick, children, ...prop }: Props) => {
  return (
    <button
      className={styles.buttonContainer({ disabled })}
      onClick={onClick}
      disabled={disabled}
      {...prop}
    >
      {children}
    </button>
  );
};

export default Button;
