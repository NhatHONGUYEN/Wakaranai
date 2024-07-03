import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

const ScaleAnimation = ({ children, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleAnimation;
