import womanVideo from "/Womanvideo (2).mp4";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import manVideo from "/Manvideo (1).mp4";
import { useState } from "react";

export default function App() {
  const [videoSrc, setVideoSrc] = useState(womanVideo);

  return (
    <div className="w-full h-screen relative bg-slate-50">
      <div className="relative h-screen ">
        <div className="mx-auto  max-w-7xl">
          <div className="relative z-10 pt-14  lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-screen w-80 translate-x-1/2 transform fill-slate-100 lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <motion.div
                  initial={{ opacity: 0, x: -100 }} // Initial position (off-screen to the left)
                  animate={{ opacity: 1, x: 0 }} // Animated position (on-screen)
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
                    Experience the perfect blend of style and comfort with
                    Wakaranai. Shop now and elevate your wardrobe with our
                    elegant and comfortable clothing collection
                  </p>

                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                      to="/womanshop"
                      className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
                      href="#"
                      onMouseEnter={() => setVideoSrc(womanVideo)}
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
                    </Link>

                    <Link
                      to="/manshop"
                      className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                      href="#"
                      onMouseEnter={() => setVideoSrc(manVideo)}
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
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
}
