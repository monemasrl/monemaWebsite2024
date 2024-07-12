"use client";
import Image from "next/image";
import style from "./carousel.module.scss";

import { motion } from "framer-motion";

function Details({ image, title }: { image: string; title: string }) {
  return (
    <motion.div className={`${style.details}`}>
      <Image src={image} alt={title} layout="fill" />
    </motion.div>
  );
}
export default Details;
