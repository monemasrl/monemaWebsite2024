import React, { MouseEventHandler } from "react";

import { motion } from "framer-motion";
import style from "./carousel.module.scss";
import Details from "./details";

function SingleSlide({
  image,
  title,
  dataFromSlide,
  setDataFromSlide,
}: {
  image: string;
  title: string;
  dataFromSlide: string | null;
  setDataFromSlide: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setDataFromSlide(title);
  };

  function handleOpen() {
    if (dataFromSlide === "") {
      return "translateX(0%)";
    }
    if (dataFromSlide === title) {
      return "translateX(-1000%)";
    }
  }

  return (
    <div className={style.single} id="single">
      <motion.div
        className={`${style.single__content} `}
        onClick={handleClick}
        style={{
          transform: handleOpen(),
        }}
      >
        <Details image={image} title={title} />
      </motion.div>
    </div>
  );
}

export default SingleSlide;
