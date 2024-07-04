import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import backgroundImage from "/public/backgroundintro.jpg";

export default function HomeVideo({ videoSrc }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-slate-200 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      {isLoading && (
        <img
          src={backgroundImage}
          alt="Placeholder"
          className="sm:aspect-[3/2] object-cover h-screen lg:aspect-auto lg:h-full lg:w-full"
        />
      )}
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
        onLoadStart={() => setIsLoading(true)}
        onLoadedData={() => setIsLoading(false)}
        style={{ display: isLoading ? "none" : "block" }}
        className="sm:aspect-[3/2] object-cover h-screen lg:aspect-auto lg:h-full lg:w-full"
      ></motion.video>
    </div>
  );
}

HomeVideo.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  placeholderSrc: PropTypes.string.isRequired,
};
