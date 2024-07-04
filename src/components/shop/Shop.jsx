// Code to display

import Clothes from "../../utils/Clothes.jsx";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Import images
import oversizeShirtImage from "/chemiseoversivefemme (1).jpg";
import checkeredVestImage from "/vesteaCarreau (1).jpg";
import suitImage from "/costumeEnLinFemme (1).jpg";
import trenchCoatImage from "/trench (1).jpg";

// Import components
import Card from "../card/Card.jsx";
import BackgroundSquare from "../../reusable ui/BackgroundSquare.jsx";
import FadeUpAnimation from "../../animations/FadeUpAnimations.jsx";

export default function Shop() {
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
      className="w-full h-full"
    >
      <BackgroundSquare />
      <section className="flex h-full lg:h-screen items-center justify-center">
        <div className="max-w-full-xl px-4 pt-20 sm:px-6 sm:py-12 md:my-20 lg:px-8">
          <header className="text-center py-10">
            <FadeUpAnimation>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Women Collection
              </h2>
              <p className="mx-auto mt-4 max-w-md text-gray-500 2xl:py-5">
                Explore our women's collection of stylish and versatile clothing
                for every occasion. Shop now and find the perfect outfit.
              </p>
            </FadeUpAnimation>
          </header>

          <motion.ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
            {Clothes[0].Clothes.female.items.map((item) => (
              <FadeUpAnimation key={item.id}>
                <Card
                  id={item.id}
                  itemImages={itemImages}
                  name={item.name}
                  price={item.price}
                  onClick={() => handleCardClick(item.id)}
                />
              </FadeUpAnimation>
            ))}
          </motion.ul>
        </div>
      </section>
    </motion.div>
  );
}
