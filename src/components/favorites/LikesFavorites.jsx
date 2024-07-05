import BackgroundSquare from "../../reusable ui/BackgroundSquare.jsx";
import OpacityAnimation from "../../animations/OpacityAnimation.jsx";
import FavoritesItemsList from "./FavoritesItemsList.jsx";

export default function LikesFavorites() {
  return (
    <OpacityAnimation className="w-full h-full">
      <BackgroundSquare />
      <section className="flex h-full lg:h-screen items-center justify-center">
        <div className="mx-auto max-w-screen-xl  px-4 py-20 sm:px-6  lg:px-8">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Favorites
            </h2>

            <p className="mt-4 max-w-md text-gray-500">
              Here are your favorite items. Click on the cross icon to remove
              them from your favorites.
            </p>
          </header>

          <FavoritesItemsList />
        </div>
      </section>
    </OpacityAnimation>
  );
}
