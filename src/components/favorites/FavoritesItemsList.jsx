import FavoritesButton from "./FavoritesButton.jsx";
import useFavoritesStore from "../../store/useFavoritesStore.jsx";
import { useNavigate } from "react-router-dom";

export default function FavoritesItemsList() {
  const navigate = useNavigate();
  const { favorites } = useFavoritesStore();

  const handleCardClick = (itemId) => {
    navigate(`/product/${itemId}`);
  };

  return (
    <ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
      {favorites.map((item) => (
        <li key={item.id}>
          <a href="#" className="group block relative  overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              onClick={() => handleCardClick(item.itemId)}
              className="h-[350px] w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <FavoritesButton item={item} id={item.id} />

            <div className="relative bg-white pt-3">
              <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                {item.name}
              </h3>

              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900">
                  {" "}
                  {item.price}{" "}
                </span>
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
