import Clothes from "../utils/Clothes";
import { motion } from "framer-motion";
import FADE_UP_ANIMATION_VARIANTS from "../animations/FADE_UP_ANIMATION_VARIANTS.jsx";

// Import images

import oversizeShirtImage from "../assets/images/chemiseoversivefemme (1).jpg";
import checkeredVestImage from "../assets/images/vesteaCarreau (1).jpg";
import suitImage from "../assets/images/costumeEnLinFemme (1).jpg";
import trenchCoatImage from "../assets/images/trench (1).jpg";
import Card from "../components/card/Card";
import NavBar from "../components/NavBar";

export default function WomanShop() {
  // Map of item names to their corresponding images
  const itemImages = {
    "Oversize Shirt": oversizeShirtImage,
    "Checkered Vest": checkeredVestImage,
    Suit: suitImage,
    "Trench Coat": trenchCoatImage,
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.5,
          },
        },
      }}
      className="bg-slate-50"
    >
      <NavBar />
      <section className="flex items-center justify-center h-screen">
        <div className="max-w-screen-xl px-4 pt-8 sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <motion.h2
              className="text-xl font-bold text-gray-900 sm:text-3xl"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Women Collection
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-md text-gray-500"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Explore our women's collection of stylish and versatile clothing
              for every occasion. Shop now and find the perfect outfit.
            </motion.p>
          </header>

          <motion.ul
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            {Clothes[0].Clothes.female.items.map((item, index) => (
              <Card
                key={index}
                id={index}
                itemImages={itemImages}
                name={item.name}
                price={item.price}
              />
            ))}
          </motion.ul>
        </div>
      </section>
    </motion.div>
  );
}
