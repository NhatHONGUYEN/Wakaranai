import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import BackgroundSquare from "../../reusable ui/BackgroundSquare";
import IntroShop from "./IntroShop";
import ProductDisplay from "./ProductDisplay";

export default function Shop() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const gender = query.get("gender");

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      viewport={{ once: true }}
      variants={{
        hidden: {
          transition: {
            staggerChildren: 1,
          },
        },
        show: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
      className="w-full h-full"
    >
      <BackgroundSquare />
      <section className="flex h-full lg:h-screen items-center justify-center">
        <div className="max-w-full-xl px-4 pt-20 sm:px-6 sm:py-12 md:my-20 lg:px-8">
          <IntroShop gender={gender} />
          <ProductDisplay gender={gender} />
        </div>
      </section>
    </motion.div>
  );
}
