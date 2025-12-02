import styles from "../../styles/LevelInfo.module.css";

const LevelInfo = ({ level }) => {
  return <div className={styles.levelInfo}>Рівень: {level}</div>;
};

export default LevelInfo;
