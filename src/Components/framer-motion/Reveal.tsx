"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Reveal({
  children,
  projectname,
}: {
  children: React.ReactNode;
  projectname?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log({ projectname, isInView });
      animation.start("visible");
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "fit-content", overflow: "hidden" }}
      className="flex mb-8 flex-col md:flex-row md:odd:flex-row-reverse"
    >
      <motion.div
        className="flex mb-8 flex-col md:flex-row md:odd:flex-row-reverse"
        variants={variants}
        initial="hidden"
        animate={animation}
        transition={{ delay: 0.15, ease: "easeInOut", duration: 0.4 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
