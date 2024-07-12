"use client";
import style from "./Hero.module.scss";
import Image from "next/image";

import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const springPhysics = {
  stiffness: 70,
  mass: 0.1,
  damping: 20,
  restDelta: 0.001,
};
function Hero({ URL, data }: { URL: string; data: any }) {
  const { scrollYProgress } = useScroll();
  const slideUpTitle = useTransform(scrollYProgress, [0, 0.1], ["0%", "-200%"]);
  const slideUpTitle2 = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["0%", "-100%"]
  );
  const slideScritteBackground = useTransform(
    scrollYProgress,
    [0, 0.6],
    ["0%", "-300%"]
  );
  const inclinaScritteBackground = useTransform(
    scrollYProgress,
    [0, 0.6],
    [-20, 20]
  );

  const slideUpTxt = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  //smooth nell'animazione
  const animSlideUpTitle2 = useSpring(slideUpTitle2, springPhysics);
  const animSlideUpTitle = useSpring(slideUpTitle, springPhysics);
  const animSlideUpTxt = useSpring(slideUpTxt, springPhysics);
  const animSlideScritteBackground = useSpring(
    slideScritteBackground,
    springPhysics
  );

  return (
    <div className={style.wrapperHero}>
      <div className={style.hero}>
        <motion.div
          className={style.hero__tech}
          style={{
            y: animSlideScritteBackground,
            x: "-50%",

            skewX: -2,
            skewY: inclinaScritteBackground,
          }}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Javascript, Python, Angular, React, Gatsby/Next, Node.js, Java,
          Spring, Spring Boot, Spring Security, JSP,ThymeLeaf, Struts, PHP,
          Ruby, AWS, HTML, CSS, PostgreSQL ,GraphQL, MongoDB, MySQL Firebase +
          Firestore + Google Cloud Functions + Google Cloud Storage...
        </motion.div>
        <motion.video autoPlay loop muted playsInline className={style.video}>
          <source src={URL} type="video/mp4" />
          <Image
            className={style.hero__image}
            src={"/image/background.jpg"}
            layout="fill"
            alt="Immagine Principale HomePage"
            priority
          />
        </motion.video>
        <motion.div className={style.hero__content}>
          <motion.div
            className={style.hero__title}
            style={{ y: animSlideUpTitle }}
          >
            <div style={{ position: "relative" }}>
              <motion.span
                className={style.hero__title__mask}
                initial={{ width: "0%" }}
                animate={{ width: [0, "100%", 0] }}
                transition={{ duration: 1, delay: 1.5 }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0 }}
              >
                We are
              </motion.div>
            </div>
            <div style={{ position: "relative" }}>
              <motion.span
                className={style.hero__title__mask}
                initial={{ width: "0%" }}
                animate={{ width: [0, "100%", 0] }}
                transition={{ delay: 1.8, duration: 1 }}
              ></motion.span>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0 }}
              >
                here to:
              </motion.div>
            </div>
          </motion.div>
          <motion.div>
            <motion.div
              className={style.hero__description}
              style={{ y: animSlideUpTitle2 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              design & <br /> develop
            </motion.div>
            <motion.p
              style={{ y: animSlideUpTxt }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 1 }}
            >
              Progettiamo e sviluppiamo per il web da oltre 20 anni
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
