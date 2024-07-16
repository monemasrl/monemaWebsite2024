"use client";

import style from "./animations.module.scss";

function TitleColorAnimation({
  title,
  color1,
  color2,
}: {
  title: string;
  color1: string;
  color2: string;
}) {
  return (
    <div className={style.titolColorAnimation}>
      <h2 style={{ color: color1 }}>
        {title}
        <span style={{ color: color2 }}>{title}</span>
      </h2>
    </div>
  );
}

export default TitleColorAnimation;
