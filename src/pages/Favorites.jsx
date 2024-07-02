import { useEffect } from "react";
import useFavoritesStore from "../store/useFavoritesStore.jsx";
import ButtonAdd from "../reusable ui/ButtonAdd.jsx";
import useCartStore from "../store/useCartStore.jsx";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function Favorites() {
  const { favorites, getFavorites, deleteFavorite } = useFavoritesStore();
  const { addItemToBasket } = useCartStore();

  const onAddToBasket = (item) => {
    addItemToBasket(item);
  };

  const onDeleteFavorite = (itemId) => {
    deleteFavorite(itemId);
  };

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Favorites
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {favorites.map((item) => (
            <li key={item.id}>
              <a href="#" className="group block relative  overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[350px] w-full  object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="absolute z-50 bottom-20 left-0 right-0 flex justify-center items-center transition-transform duration-300 group-hover:translate-y-[-20px]">
                  <ButtonAdd onClick={() => onAddToBasket(item)} />
                </div>
                <div className="absolute z-50 top-4 right-4">
                  <button
                    type="button"
                    className="btn btn-ghost btn-circle   transition-transform duration-300 group-hover:scale-110"
                    onClick={() => onDeleteFavorite(item.itemId)}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="sr-only">Delete</span>
                  </button>
                </div>

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
      </div>
    </section>
  );
}
