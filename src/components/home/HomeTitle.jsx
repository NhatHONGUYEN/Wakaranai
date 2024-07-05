import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LinkCategory from "./linkCategory/LinkCategory.jsx";

export default function HomeTitle({ setVideoSrc }) {
  return (
    <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
        <div className="hidden sm:mb-10 sm:flex"></div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1.0],
          }} // Animation duration
        >
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-Pinot font-bold tracking-tight text-gray-900 sm:text-6xl p-20">
              Wakaranai
            </h1>
          </div>
          <p className="text-center lg:text-left">
            Experience the perfect blend of style and comfort with Wakaranai.
            Shop now and elevate your wardrobe with our elegant and comfortable
            clothing collection
          </p>

          <LinkCategory setVideoSrc={setVideoSrc} />
        </motion.div>
      </div>
    </div>
  );
}

HomeTitle.propTypes = {
  setVideoSrc: PropTypes.func.isRequired,
};
