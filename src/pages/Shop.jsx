import Clothes from "../utils/Clothes";

// Import images

import oversizeShirtImage from "../assets/images/chemiseoversivefemme (1).jpg";
import checkeredVestImage from "../assets/images/vesteaCarreau (1).jpg";
import suitImage from "../assets/images/costumeEnLinFemme (1).jpg";
import trenchCoatImage from "../assets/images/trench (1).jpg";

export default function Shop() {
  // Map of item names to their corresponding images
  const itemImages = {
    "Oversize Shirt": oversizeShirtImage,
    "Checkered Vest": checkeredVestImage,
    Suit: suitImage,
    "Trench Coat": trenchCoatImage,
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

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Clothes[0].Clothes.female.items.map((item, index) => (
            <li key={index}>
              <a className="group block overflow-hidden">
                <img
                  src={itemImages[item.name] || ""} // Use the corresponding image or the default image
                  alt={item.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />

                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {item.name}
                  </h3>

                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>

                    <span className="tracking-wider text-gray-900">
                      ${item.price}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
