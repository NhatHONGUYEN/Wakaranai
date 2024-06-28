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
                      <a
                        className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                        href="#"
                      >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                          <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>

                        <span className="text-sm font-medium transition-all group-hover:me-4">
                          {" "}
                          For her{" "}
                        </span>
                      </a>

                      <a
                        className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="#"
                      >
                        <span className="absolute -end-full transition-all group-hover:end-4">
                          <svg
                            className="size-5 rtl:rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>

                        <span className="text-sm font-medium transition-all group-hover:me-4">
                          {" "}
                          For him{" "}
                        </span>
                      </a>
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
