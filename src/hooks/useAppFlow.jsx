import { useState } from "react";

export const PAGES = {
  START: "start",
  GAME: "game",
  RESULT: "result",
};

export const useAppFlow = () => {
  const [page, setPage] = useState(PAGES.START);
  const [score, setScore] = useState(0); 

  const startGame = () => {
    setScore(0);
    setPage(PAGES.GAME);
  };

  const finishGame = (finalScore) => {
    setScore(finalScore);
    setPage(PAGES.RESULT); 
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
