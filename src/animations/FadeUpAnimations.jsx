import { motion } from "framer-motion";

// Define the animation variants as a constant
const FADE_UP_ANIMATION_VARIANTS = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      staggerChildren: 1,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: {
      duration: 2,
    },
  },
};

export default function FadeUpAnimation({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={FADE_UP_ANIMATION_VARIANTS}
    >
      {children}
    </motion.div>
  );
}
