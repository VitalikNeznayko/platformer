import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import { useAppFlow, PAGES } from "./hooks/useAppFlow";

function App() {
  const { page, score, startGame, finishGame, restartGame } = useAppFlow();

  return (
    <div>
      {page === PAGES.START && <StartPage onStart={startGame} />}
      {page === PAGES.GAME && <GamePage onFinish={finishGame} />}
      {page === PAGES.RESULT && (
        <ResultPage score={score} onRestart={restartGame} />
      )}
    </div>
  );
}

export default App;
