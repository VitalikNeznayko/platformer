import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import Title from "../components/UI/Title/Title";

const StartPage = ({userId}) => {

  
  const navigate = useNavigate();
  return (
    <div>
      <Title text="Платформер" />
      <Button text="Start Game" onClick={() => navigate(`/${userId}/game`)} />
      <Button text="Settings" onClick={() => navigate(`/${userId}/settings`)} />
    </div>
  );
};

export default StartPage;
