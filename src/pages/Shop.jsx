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
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Clothes[0].Clothes.female.items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border p-4 rounded-lg"
          >
            <img
              src={itemImages[item.name] || ""} // Use the corresponding image or the default image
              alt={item.name}
              className="w-64 h-64 object-cover rounded-lg"
            />
            <p className="text-2xl font-bold mt-2">{item.name}</p>
            <p className="text-xl font-bold mt-1">${item.price}</p>
            <p className="text-lg mt-1">Sizes: {item.sizes.join(", ")}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
