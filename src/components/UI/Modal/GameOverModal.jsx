import { createPortal } from "react-dom";
import styles from "./GameOverModal.module.css";
import Button from "../Button/Button";

const modalRoot = document.getElementById("modal-root");

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
    modalRoot
  );
};

export default GameOverModal;
