import styles from "./Dangerous.module.css";

const Dangerous = ({ o }) => {
  return (
    <div
      className={styles.danger}
      style={{ left: o.x, top: o.y, width: o.width, height: o.height }}
    />
  );
};

export default Dangerous;
