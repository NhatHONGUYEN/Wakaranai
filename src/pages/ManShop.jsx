import Clothes from "../utils/Clothes";
import { motion } from "framer-motion";
import FADE_UP_ANIMATION_VARIANTS from "../animations/FADE_UP_ANIMATION_VARIANTS.jsx";
import { useNavigate } from "react-router-dom";
// Import images

import oversizeManShirtImage from "/chemiseOversizeHomme (1).jpg";
import blackShirtImage from "/chemiseNoir (1).jpg";
import pulloverImage from "/pullHomme (1).jpg";
import Card from "../components/card/Card";
import NavBar from "../components/NavBar";

export default function ManShop() {
  const navigate = useNavigate();
  // Map of item names to their corresponding images
  const itemImages = {
    "Oversize Man Shirt": oversizeManShirtImage,
    "Black Shirt": blackShirtImage,
    Pullover: pulloverImage,
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
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
      <section className="flex items-center justify-center h-full lg:h-screen">
        <div className="max-w-full-xl  px-4 pt-20  sm:px-6 sm:py-12 lg:px-8">
          <header className="text-center">
            <motion.h2
              className="text-xl font-bold text-gray-900 sm:text-3xl"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Men Collection
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-md text-gray-500"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Browse our men's collection of high-quality and stylish clothing
              for any occasion. From casual wear to formal attire, we have
              something for every man. Shop now and find the perfect outfit for
              your next event
            </motion.p>
          </header>

          <motion.ul
            className="mt-8 block  sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            {Clothes[0].Clothes.male.items.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                itemImages={itemImages}
                name={item.name}
                price={item.price}
                onClick={() => handleCardClick(item.id)}
              />
            ))}
          </motion.ul>
        </div>
      </section>
    </motion.div>
  );
}
