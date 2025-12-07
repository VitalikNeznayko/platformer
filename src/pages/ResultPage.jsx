import Title from "../components/UI/Title/Title";
import Button from "../components/UI/Button/Button";

const ResultPage = ({ score, onRestart }) => {
  return (
    <div>
      <Title text="Гру завершено!" />   
      <Button onClick={onRestart} text="Спробувати знову" />
    </div>
  );
}

export default ResultPage;