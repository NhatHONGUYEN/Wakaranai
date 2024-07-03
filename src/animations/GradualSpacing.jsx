import PropTypes from "prop-types";
import { cn } from "../utils/utils";
import { AnimatePresence, motion } from "framer-motion";

export default function GradualSpacing({
  text,
  duration = 1,
  delayMultiple = 0.1,
  framerProps = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}) {
  return (
    <div className="flex justify-center space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm ", className)}
          >
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}

GradualSpacing.propTypes = {
  text: PropTypes.string.isRequired,
  duration: PropTypes.number,
  delayMultiple: PropTypes.number,
  framerProps: PropTypes.object,
  className: PropTypes.string,
};
