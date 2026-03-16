import styles from "./Button.module.css";
/**
 * @module UI
 */

/**
 * Button component for user interactions
 * @param {Object} props - Component props
 * @param {string} [props.text="Click"] - Button label
 * @param {Function} props.onClick - Click event handler
 * @param {"active" | "disabled"} [props.styleType="active"] - Button state
 * @returns {JSX.Element}
 */
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
