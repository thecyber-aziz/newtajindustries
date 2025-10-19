// src/components/AnimatedSection.jsx
import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
