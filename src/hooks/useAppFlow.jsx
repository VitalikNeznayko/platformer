import { useState } from "react";

export const PAGES = {
  START: "start",
  GAME: "game",
  RESULT: "result",
};

export const useAppFlow = () => {
  const [page, setPage] = useState(PAGES.START);

  const startGame = () => {
    setPage(PAGES.GAME);
  };

  const finishGame = () => {
    setPage(PAGES.RESULT); 
  };

  const restartGame = () => {
    setPage(PAGES.START);
  };

  return {
    page,
    startGame,
    finishGame,
    restartGame,
  };
};
