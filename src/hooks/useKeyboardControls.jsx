import { useEffect, useState } from "react";

export const useKeyboardControls = () => {
  const [keys, setKeys] = useState({
    left: false,
    right: false,
    jump: false,
  });

  useEffect(() => {
    const down = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a")
        setKeys((k) => ({ ...k, left: true }));
      if (e.key === "ArrowRight" || e.key === "d")
        setKeys((k) => ({ ...k, right: true }));
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w")
        setKeys((k) => ({ ...k, jump: true }));
    };

    const up = (e) => {
      if (e.key === "ArrowLeft" || e.key === "a")
        setKeys((k) => ({ ...k, left: false }));
      if (e.key === "ArrowRight" || e.key === "d")
        setKeys((k) => ({ ...k, right: false }));
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w")
        setKeys((k) => ({ ...k, jump: false }));
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return keys;
};
