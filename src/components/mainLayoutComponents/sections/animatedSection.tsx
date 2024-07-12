"use client";
import { motion } from "framer-motion";
import React from "react";
function AnimatedSection({
  overflowHidden = true,
  animateOnce = true,
  width,
  children,
  classname,
}: {
  overflowHidden?: boolean;
  animateOnce?: boolean;
  children?: React.ReactNode;
  width?: string;
  classname?: string;
}) {
  return (
    <motion.section
      style={{
        position: "relative",
        overflow: `${overflowHidden ? "hidden" : "initial"}`,
        width: `${width ? width : "100%"}`,
      }}
      className={classname}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: animateOnce }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
