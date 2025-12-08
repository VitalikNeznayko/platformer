import styles from "./GameHUD.module.css";

const GameHUD = ({ level, collected, total, time }) => {
  return (
    <div className={styles.hud}>
      <div className={styles.lefthud}>
        <div className={styles.item}>
          <span className={styles.icon}>🏁</span>
          Level {level}
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>🟡</span>
          {collected}/{total}
        </div>
      </div>
      <div className={styles.item}>
        <span className={styles.icon}>⏱</span>
        {time}s
      </div>
    </div>
  );
};

export default GameHUD;
