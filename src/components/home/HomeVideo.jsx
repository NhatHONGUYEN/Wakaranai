import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function HomeVideo({ videoSrc }) {
  return (
    <div className="bg-slate-200 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
          ease: [0.25, 0.1, 0.25, 1.0],
        }}
        src={videoSrc}
        autoPlay
        muted
        loop
        controls={false}
        loading="lazy"
        className="sm:aspect-[3/2] object-cover h-screen lg:aspect-auto lg:h-full lg:w-full"
      ></motion.video>
    </div>
  );
}

HomeVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
};
