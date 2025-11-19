import * as styles from "./info-box.css";

interface InfoBoxProps {
  title: string;
  value?: string | number;
}

const InfoBox = ({ title, value }: InfoBoxProps) => {
  return (
    <div className={styles.usernameContainer}>
      <p className={styles.inputTitle}>{title}</p>
      <p className={styles.username}>{value}</p>
    </div>
  );
};

export default InfoBox;
