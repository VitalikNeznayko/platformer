import styles from "./LevelInfo.module.css";

const LevelInfo = ({ level }) => {
  return <div className={styles.levelInfo}>Рівень: {level}</div>;
};

export default LevelInfo;
