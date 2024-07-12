"use client";
import style from "./skills.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
type Tskill = {
  titolo: string;
  testo?: string;
  image?: string;
  link?: string;
};
function Skills({ data }: { data: Tskill[] }) {
  return (
    <div className={style.sectionSkills}>
      {" "}
      {data.map((skill, index) => (
        <motion.div
          key={index}
          className={style.sectionSkills__single}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.5 }}
        >
          {skill.image && (
            <Image src={skill.image} width={90} height={90} alt="ecommerce" />
          )}
          <h2>{skill.titolo}</h2>
          <p> {skill.testo}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills;
