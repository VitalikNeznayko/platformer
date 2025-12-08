import Button from "../components/UI/Button/Button";
import Title from "../components/UI/Title/Title";

const StartPage = ({ onStart }) => {
  return (
    <div>
      <Title text="Платформер" />
      <Button text="Почати гру" onClick={onStart} />
    </div>
  );
};

export default StartPage;
