import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const OpacityAnimation = ({ children, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{
        duration: 2,
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
