import Button from "../components/UI/Button";
import Title from "../components/UI/Title";
import { usePlayerName } from "../hooks/usePlayerName";

const StartPage = ({ onStart }) => {
  const { playerName, changeName } = usePlayerName();
  
  return (
    <div>
      <Title text="Платформер" />

      <input
        placeholder="Введіть ваше ім'я"
        value={playerName}
        onChange={changeName}
      />

      <Button text="Почати гру" onClick={onStart} />
    </div>
  );
};

export default StartPage;
