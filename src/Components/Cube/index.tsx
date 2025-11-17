import React from "react";
import style from "./Cube.module.scss";

export const Cube = () => {
  const [y, setY] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      setY((prevY) => prevY + 1);
    }, 100);
  }, []);
  document.documentElement.style.setProperty("--inY", `${y}`);
  return (
    <div className={style.scene}>
      <div className={style.cube}></div>
    </div>
  );
};
