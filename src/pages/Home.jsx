import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import womanVideo from "../assets/images/womanVideo (2).mp4";
import NumberTicker from "../animations/NumberTicker";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import GradualSpacing from "../animations/GradualSpacing";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div className="w-full h-screen relative bg-slate-50   ">
      {isLoading ? (
        <p className="whitespace-pre-wrap absolute bottom-20 right-14 text-8xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={100} />
        </p>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <NavBar />
          </motion.div>
          <div className="relative  ">
            <div className="mx-auto  max-w-7xl">
              <div className="relative z-10 pt-14  lg:w-full lg:max-w-2xl">
                <svg
                  className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-slate-100 lg:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="0,0 90,0 50,100 0,100" />
                </svg>

                <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:mb-10 sm:flex"></div>
                    <h1 className="text-4xl p-20 font-Pinot font-bold tracking-tight text-gray-900 sm:text-6xl">
                      <GradualSpacing text="Wakaranai" />
                    </h1>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to="/womanshop"
                          className="btn glass border-2 text-2xl"
                        >
                          <GradualSpacing text="For her" />
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          to="/manshop"
                          className="btn glass border-2 text-2xl"
                        >
                          <GradualSpacing text="For him" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <motion.video
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                src={womanVideo}
                autoPlay
                loop
                muted
                controls={false}
                className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              ></motion.video>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
