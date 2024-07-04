import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100 }, // Start at the bottom
  visible: { opacity: 1, y: 0 }, // End at the original position
  exit: { opacity: 0, y: 100 }, // Exit to the bottom
};

const OpacityAnimation = ({ children, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{
        duration: 3, // Increase the duration to slow down the animation
        delay: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default OpacityAnimation;
