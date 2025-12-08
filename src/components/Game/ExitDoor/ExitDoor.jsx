import styles from "./ExitDoor.module.css";

const ExitDoor = ({ x, y, active }) => {
  return (
    <div
      className={`${styles.door} ${active ? styles.active : styles.inactive}`}
      style={{ left: x, top: y }}
    />
  );
};

export default ExitDoor;
