"use client";

import style from "./carousel.module.scss";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import Scheda from "./scheda";
import Image from "next/image";
import TitleColorAnimation from "../animations/titleColorAnimation";
const data = [
  {
    image: "/image/portfolio/irma.jpg",
    title: "irma",
    description:
      "Innovative Radiation Monitor for contAiners at port custom gates\n <br/> Sviluppo di un portale innovativo per l’individuazione di materiale radioattivo all’interno dei container in transito nei varchi doganali portuali, \nun portale innovativo per individuare la presenza di materiale nucleare occultato, o semplicemente disperso, all’interno dei container durante la movimentazione.",
    link: "http://",
    skills: "Backend, Frontend, Ux/Ui",
    tecnologie: "javascript, react, nodejs, ...",
  },
  {
    image: "/image/portfolio/deka.jpg",
    title: "MONNALISA 4.0",
    description:
      "Ux/Ui, interfacce di utilizzo per device chirurgico, Innovazione attraverso sistemi rivoluzionari, tecnologie all'avanguardia, applicazioni avanzate e nuove frontiere terapeutiche. Da oltre 30 anni siamo un epicentro dell'innovazione per l'intero settore medico a livello mondiale.",
    skills: "Ux/Ui",
    tecnologie: "Illustrator, Affinity, Figma",
  },
  {
    image: "/image/portfolio/irma.jpg",
    title: "test",
    description:
      "Innovative Radiation Monitor for contAiners at port custom gates\n <br/> Sviluppo di un portale innovativo per l’individuazione di materiale radioattivo all’interno dei container in transito nei varchi doganali portuali, \nun portale innovativo per individuare la presenza di materiale nucleare occultato, o semplicemente disperso, all’interno dei container durante la movimentazione.",
    link: "http://",
    skills: "Backend, Frontend, Ux/Ui",
    tecnologie: "javascript, react, nodejs, ...",
  },
  {
    image: "/image/portfolio/deka.jpg",
    title: "test 2",
    description:
      "Ux/Ui, interfacce di utilizzo per device chirurgico, Innovazione attraverso sistemi rivoluzionari, tecnologie all'avanguardia, applicazioni avanzate e nuove frontiere terapeutiche. Da oltre 30 anni siamo un epicentro dell'innovazione per l'intero settore medico a livello mondiale.",
    skills: "Ux/Ui",
    tecnologie: "Illustrator, Affinity, Figma",
  },
];

function Portfolio() {
  const wrapper = useRef(null);
  const [dataFromSlide, setDataFromSlide] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ["start end", "start start"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const keyboardScroll = useTransform(scrollYProgress, [0, 1], [0, 210]);

  const dataScheda = data.find((item) => item.title === dataFromSlide);

  return (
    <>
      <motion.div
        className={style.keyboardScrolling}
        style={{
          y: keyboardScroll,
        }}
      >
        <Image
          src={currentImage || "/image/keyboard.svg"}
          alt="Picture of the author"
          layout="fill"
        />
      </motion.div>

      {typeof window === "object" &&
        createPortal(
          <Scheda
            data={dataScheda}
            setDataFromSlide={setDataFromSlide}
            title={dataFromSlide || ""}
          />,
          document.body
        )}
      <motion.div
        className={`slider-container ${style.monemaSlider}`}
        ref={wrapper}
        style={{
          opacity: 1,
        }}
      >
        <ul>
          {data.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => setDataFromSlide(item.title)}
                onMouseOver={() => setCurrentImage(item.image)}
                onMouseOut={() => setCurrentImage(null)}
              >
                <TitleColorAnimation
                  title={item.title}
                  color1="#d0d9e0"
                  color2="#28375d"
                />
              </li>
            );
          })}
        </ul>
      </motion.div>
    </>
  );
}

export default Portfolio;
