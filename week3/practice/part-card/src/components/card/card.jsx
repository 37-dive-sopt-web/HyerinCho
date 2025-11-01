import styles from './card.module.css';

const Card = ({name, github, englishName}) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>깃허브: {github}</p>
      <p>영문 이름: {englishName}</p>
    </div>
  );
};

export default Card;