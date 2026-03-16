import { createPortal } from "react-dom";
import styles from "./GameOverModal.module.css";
import Button from "../Button/Button";

/**
 * @module UI
 */

const modalRoot = document.getElementById("modal-root");

/**
 * GameOverModal component for displaying game over message and actions
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Controls modal visibility
 * @param {string} props.message - Game over message
 * @param {Function} props.onRestart - Callback to restart the game
 * @param {Function} props.onMenu - Callback to return to main menu
 * @returns {JSX.Element|null}
 */
const GameOverModal = ({ isOpen, message, onRestart, onMenu }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.title}>Game Over</h2>
        <p className={styles.message}>{message}</p>

        <div className={styles.buttons}>
          <Button text="Restart game" onClick={onRestart} />

          <Button
            text="Main Menu"
            onClick={onMenu}
            className={styles.secondaryBtn}
          />
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default GameOverModal;
