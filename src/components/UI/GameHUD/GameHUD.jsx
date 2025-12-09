import styles from "./GameHUD.module.css";
import Button from "../Button/Button";

const GameHUD = ({ level, collected, total, time, onBack }) => {
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

      <div className={styles.righthud}>
        <div className={styles.time}>
          <span className={styles.icon}>⏱</span>
          {time}s
        </div>

        <Button text="Back to menu" onClick={onBack} />
      </div>
    </div>
  );
};

export default GameHUD;
