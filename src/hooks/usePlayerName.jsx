import { useState } from "react";

export const usePlayerName = () => {
  const [playerName, setPlayerName] = useState("");

  const changeName = (e) => setPlayerName(e.target.value);

  const resetName = () => setPlayerName("");

  return { playerName, changeName, resetName };
};
