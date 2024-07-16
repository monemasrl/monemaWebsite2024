import React from "react";
import Image from "next/image";
import style from "./carousel.module.scss";
import { AnimatePresence, motion } from "framer-motion";
type Tdata = {
  image: string;
  title: string;
  description: string;
  link?: string;
  skills: string;
  tecnologie: string;
};

function Scheda({
  data,
  title,
  setDataFromSlide,
}: {
  data: Tdata | undefined;
  title: string;
  setDataFromSlide?: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <AnimatePresence>
      {data && (
        <motion.div
          key={title}
          className={style.homePortfolioItem}
          initial={{
            opacity: 0,
            x: "-100vw",
          }}
          animate={{
            opacity: 1,
            x: "0vw",
          }}
          exit={{
            opacity: 0,
            x: "-100vw",
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className={style.homePortfolioItem__image}
            initial={{
              opacity: 0,
              x: "-100vw",
            }}
            animate={{
              opacity: 1,
              x: "0vw",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.7,
            }}
          >
            <Image src={data.image} alt={data.title} layout={"fill"} />
          </motion.div>
          <div className={style.homePortfolioItem__content}>
            <div
              className={style.homePortfolioItem__content__close}
              onClick={() => setDataFromSlide && setDataFromSlide(null)}
            >
              close
            </div>
            <div className={style.homePortfolioItem__content__title}>
              <h3>{data.title}</h3>
            </div>
            <p
              className={style.homePortfolioItem__content__description}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <p>
              <span>SKILLS</span>
              {data.skills}
            </p>
            <p>
              <span>Tecnologie</span>
              {data.tecnologie}
            </p>
            <a href={data.link}>Vai al sito</a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Scheda;
