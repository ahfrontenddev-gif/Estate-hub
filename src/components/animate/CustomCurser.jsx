import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default");
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 500,
    damping: 35,
  });

  const smoothY = useSpring(y, {
    stiffness: 500,
    damping: 35,
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine) and (min-width: 1024px)");

    const update = () => setEnabled(media.matches);
    update();

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);

      const target = e.target;

      if (!(target instanceof Element)) return;

      if (target.closest("[data-cursor='view']")) {
        setMode("view");
      } else if (target.closest("a, button, [role='button']")) {
        setMode("button");
      } else {
        setMode("default");
      }
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    media.addEventListener("change", update);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("blur", up);

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("blur", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: mode === "view" ? 85 : mode === "button" ? 22 : 10,
        height: mode === "view" ? 85 : mode === "button" ? 22 : 10,
        backgroundColor: "#c6d4a5",
        scale: clicking ? 0.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 25,
      }}
    >
      <motion.span
        className="whitespace-nowrap text-[1.1rem] font-medium text-[#10251c]"
        animate={{
          opacity: mode === "view" ? 1 : 0,
          scale: mode === "view" ? 1 : 0.7,
        }}
      >
        مشاهده
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
