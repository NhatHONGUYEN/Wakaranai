import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import womanVideo from "../assets/images/womanVideo (2).mp4";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    setTimeout(() => {
      setIsLoading(false);
    }, 0);
  }, []);

  return (
    <div className="w-full h-screen relative">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <video
            src={womanVideo}
            autoPlay
            loop
            muted
            controls={false}
            className="absolute top-0 left-0 w-full h-full object-cover"
          ></video>
          <motion.div
            className="absolute bottom-48 z-10 text-white text-9xl flex"
            initial={{ x: "-80%" }}
            animate={{ x: "10%" }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 1 }, (_, index) => (
              <div key={index} className="whitespace-nowrap">
                - wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
                wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
                wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
              </div>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-16 z-10 text-white text-9xl flex"
            initial={{ x: "-10%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          >
            {Array.from({ length: 1 }, (_, index) => (
              <div key={index} className="whitespace-nowrap">
                - wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
                wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
                wakaranai - wakaranai - wakaranai - wakaranai - wakaranai -
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}
