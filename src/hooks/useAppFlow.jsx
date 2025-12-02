import { useState } from "react";

export const PAGES = {
  START: "start",
  GAME: "game",
  RESULT: "result",
};

export const useAppFlow = () => {
  const [page, setPage] = useState(PAGES.START);
  const [score, setScore] = useState(PAGES.START);

  const startGame = () => {
    setScore(0);
    setPage(PAGES.GAME);
  };
  
  const finishGame = () => {
    setScore(0);
    setPage(PAGES.FINISH);
  };

  const restartGame = () => {
    setScore(0);
    setPage(PAGES.START);
  };

  return {
    page,
    score,
    startGame,
    finishGame,
    restartGame,
  };
};
