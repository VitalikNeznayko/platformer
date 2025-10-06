import { useState } from "react";
import StartPage from "./pages/StartPage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";
import Title from "./components/UI/Title";

function App() {
  const [state, setState] = useState("start");

  return (
    <div>
      <Title text="Платформер" />
      {state === "start" && <StartPage onStart={() => setState("game")} />}
      {state === "game" && <GamePage onFinish={() => setState("result")} />}
      {state === "result" && <ResultPage onRestart={() => setState("start")} />}
    </div>
  );
}

export default App;
