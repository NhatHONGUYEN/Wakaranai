import Clothes from "../utils/Clothes";
import { motion } from "framer-motion";
import FADE_UP_ANIMATION_VARIANTS from "../animations/FADE_UP_ANIMATION_VARIANTS.jsx";
import { useNavigate } from "react-router-dom";

// Import images
import oversizeShirtImage from "/chemiseoversivefemme (1).jpg";
import checkeredVestImage from "/vesteaCarreau (1).jpg";
import suitImage from "/costumeEnLinFemme (1).jpg";
import trenchCoatImage from "/trench (1).jpg";
import Card from "../components/card/Card";
import BackgroundSquare from "../reusable ui/BackgroundSquare.jsx";

export default function WomanShop() {
  const navigate = useNavigate();
  // Map of item names to their corresponding images
  const itemImages = {
    "Oversize Shirt": oversizeShirtImage,
    "Checkered Vest": checkeredVestImage,
    Suit: suitImage,
    "Trench Coat": trenchCoatImage,
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

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
      className=" w-full h-full "
    >
      <BackgroundSquare />
      <section className="flex h-full lg:h-screen  items-center justify-center">
        <div className="max-w-full-xl  px-4 pt-20  sm:px-6 sm:py-12 md:my-20 lg:px-8">
          <header className="text-center py-10">
            <motion.h2
              className="text-xl font-bold text-gray-900 sm:text-3xl"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Women Collection
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-md text-gray-500 2xl:py-5 "
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              Explore our women's collection of stylish and versatile clothing
              for every occasion. Shop now and find the perfect outfit.
            </motion.p>
          </header>

          <motion.ul
            className="mt-8  grid gap-4 grid-cols-2 lg:grid-cols-4"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            {Clothes[0].Clothes.female.items.map((item) => (
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
