"use client";
import style from "./form.module.scss";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import HeroScene from "@/components/3d/heroScene";
import { useRef } from "react";
import Form from "./form";

function WrapperForm() {
  const mainRef = useRef(null);
  const isInView = useInView(mainRef);
  const { scrollYProgress: scrollYProgressContatti } = useScroll({
    target: mainRef,
    offset: ["start end", "end end"],
  });
  const progressContatti = useTransform(
    scrollYProgressContatti,
    [0.6, 0.9],
    ["0%", "35%"]
  );
  return (
    <div ref={mainRef}>
      <div className={style.lastSectionContatti__content}>
        <motion.div
          className={style.lastSectionContatti__content__video}
          style={{ flex: "1", maxWidth: "45%" }}
        >
          <HeroScene isInView={isInView} />
        </motion.div>

        <motion.div
          style={{
            width: progressContatti,
            margin: "1rem",
            overflow: "hidden",
            height: "100vh",
          }}
        >
          <Form />
        </motion.div>
      </div>
    </div>
  );
}

export default WrapperForm;
