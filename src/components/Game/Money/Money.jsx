import styles from "./Money.module.css";

const Money = ({ x, y }) => {
  return (
    <div
      className={styles.money}
      style={{
        left: x + "px",
        top: y + "px",
      }}
    />
  );
};

export default Money;
