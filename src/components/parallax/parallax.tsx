"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import style from "./parallax.module.scss";

function Parallax({
  imageURL,
  alt,
  height,
}: {
  imageURL: string;
  alt: string;
  height: string;
}) {
  const paralRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paralRef,
    offset: ["start end", "end start"],
  });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <motion.div
      className={style.parallaxContainer}
      ref={paralRef}
      style={{
        height: height,
      }}
    >
      <motion.div
        className={style.parallaxContainer__parallax}
        style={{
          y: parallax,
        }}
      >
        <Image src={imageURL} layout="fill" objectFit="cover" alt={alt} />
      </motion.div>
    </motion.div>
  );
}

export default Parallax;
