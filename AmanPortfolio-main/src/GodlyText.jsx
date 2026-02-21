import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GodlyText({ text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      className="text-4xl font-extrabold text-white"
      initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
}
