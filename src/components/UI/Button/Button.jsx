import styles from "./Button.module.css";

const Button = ({ text = "Click", onClick, styleType = "active" }) => {
  const isDisabled = styleType === "disabled";

  return (
    <button
      className={`${styles.btn} ${isDisabled ? styles.disabled : ""}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
