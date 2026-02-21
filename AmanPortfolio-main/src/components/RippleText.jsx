import { motion } from "framer-motion";
import { useState } from "react";

export default function RippleText({ text }) {
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });

  const handleMouseEnter = (e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setRipple({
      x: e.clientX - left,
      y: e.clientY - top,
      show: true,
    });

    setTimeout(() => setRipple({ ...ripple, show: false }), 600);
  };

  return (
    <div
      className="relative inline-block px-6 py-3 overflow-hidden text-2xl font-bold text-white bg-black cursor-pointer rounded-lg"
      onMouseEnter={handleMouseEnter}
    >
      {/* Ripple Effect */}
      {ripple.show && (
        <motion.span
          className="absolute block w-32 h-32 bg-blue-500 rounded-full"
          style={{
            top: ripple.y - 64,
            left: ripple.x - 64,
          }}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      )}
      {text}
    </div>
  );
}
