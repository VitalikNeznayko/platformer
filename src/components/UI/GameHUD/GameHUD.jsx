import styles from "./GameHUD.module.css";
import Button from "../Button/Button";

/**
 * @module UI
 */


/**
 * GameHUD component for displaying game information and controls
 * @param {Object} props - Component props
 * @param {number} props.level - Current game level
 * @param {number} props.collected - Number of collected items
 * @param {number} props.total - Total items in the level
 * @param {number} props.time - Elapsed time in seconds
 * @param {Function} props.onBack - Callback for returning to the menu
 * @returns {JSX.Element}
 */
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
