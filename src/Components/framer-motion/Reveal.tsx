"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Reveal({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    }
  }, [isInView]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex mb-8 flex-col md:flex-row md:odd:flex-row-reverse"
      variants={variants}
      initial="hidden"
      animate={animation}
      transition={{ delay: 0.025, ease: "easeInOut", duration: 0.5 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
