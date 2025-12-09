import Button from "../components/UI/Button/Button";
import Title from "../components/UI/Title/Title";

const StartPage = ({ onStart, onSetting }) => {
  return (
    <div>
      <Title text="Платформер" />
      <Button text="Почати гру" onClick={onStart} />
      <Button text="Налаштування" onClick={onSetting} />
    </div>
  );
};

export default StartPage;
