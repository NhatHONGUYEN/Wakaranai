import Clothes from "../utils/Clothes";

// Import images

import oversizeManShirtImage from "../assets/images/chemiseOversizeHomme (1).jpg";
import blackShirtImage from "../assets/images/chemiseNoir (1).jpg";
import pulloverImage from "../assets/images/pullHomme (1).jpg";
import Card from "../components/card/Card";

export default function ManShop() {
  // Map of item names to their corresponding images
  const itemImages = {
    "Oversize Man Shirt": oversizeManShirtImage,
    "Black Shirt": blackShirtImage,
    Pullover: pulloverImage,
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-screen-xl px-4 pt-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Clothes[0].Clothes.male.items.map((item, index) => (
            <Card
              key={index}
              id={index}
              itemImages={itemImages}
              name={item.name}
              price={item.price}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
