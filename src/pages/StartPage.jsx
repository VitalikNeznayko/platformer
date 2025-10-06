import Button from "../components/UI/Button";
import Title from "../components/UI/Title";

const StartPage = ({ onStart }) => {
  return (
    <div className="page start-page">
      <Button text="Почати гру" onClick={onStart} />
    </div>
  );
};

export default StartPage;
