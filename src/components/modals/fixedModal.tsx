import React from "react";
import Image from "next/image";
import style from "./modals.module.scss";
import { AnimatePresence, motion } from "framer-motion";
type Tdata = {
  image: string;
  nome: string;
  cognome: string;
  descrizione: string;
  skills: string[];
  ruolo: string;
  cv?: string;
  eta: number;
};

function FixedModal({
  data,
  modalState,
  closeModal,
}: {
  data: Tdata;
  modalState: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean | true>>;
}) {
  const dataScheda = data;

  return (
    <AnimatePresence>
      {modalState && (
        <motion.div
          className={style.fixedModal}
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
            className={style.fixedModal__image}
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
            <Image
              src={dataScheda.image}
              alt={dataScheda.nome}
              layout={"fill"}
            />
          </motion.div>
          <div className={style.fixedModal__content}>
            <div
              className={style.fixedModal__content__close}
              onClick={() => closeModal(false)}
            >
              close
            </div>
            <div className={style.fixedModal__content__title}>
              <h3>{dataScheda.nome + " " + dataScheda.cognome}</h3>
            </div>
            <p dangerouslySetInnerHTML={{ __html: dataScheda.descrizione }} />
            <p>
              <span>SKILLS</span>
              <ul>
                {dataScheda.skills.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </p>
            <p>
              <span>Tecnologie</span>
              {dataScheda.cv}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FixedModal;
