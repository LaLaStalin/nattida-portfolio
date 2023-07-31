"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  bg: string;
}

const reveal = ({ children, width = "fit-content", bg }: Props) => {
  const refElement = useRef(null);
  const isInView = useInView(refElement, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Fine the animation
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={refElement}
      className="relative"
      style={{ width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {/* TODO Ass slide div thingy */}
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        animate={slideControls}
        initial="hidden"
        transition={{
          duration: 0.5,
          ease: "easeIn",
          times: [0, 0.1, 0.9, 1],
        }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 20,
          background: bg,
        }}
      />
    </div>
  );
};

export default reveal;
