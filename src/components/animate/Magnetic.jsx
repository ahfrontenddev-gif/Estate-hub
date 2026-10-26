
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

const Magnetic = ({ children, className = "" }) => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const handleMove = (event) => {
    if (reduceMotion || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x =
      event.clientX - rect.left - rect.width / 2;
    const y =
      event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform =
      `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
