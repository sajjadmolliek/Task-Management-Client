
import { motion, useAnimation, useScroll } from "framer-motion";
import { useRef } from "react";

const Motion = ({ children }) => {
  const ref = useRef(null);
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    ref,
    offset: [0, 1],
  });

  controls.start({ opacity: scrollYProgress });

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      {children}
    </motion.div>
  );
};

export default Motion;
