import PropTypes from "prop-types";
import OpacityAnimation from "../../animations/OpacityAnimation";

export default function IntroShop({ gender }) {
  return (
    <header className="text-center py-10">
      <OpacityAnimation>
        {gender === "male" ? (
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Men Collection
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500 2xl:py-5">
              Browse our men's collection of high-quality and stylish clothing
              for any occasion. From casual wear to formal attire, we have
              something for every man. Shop now and find the perfect outfit for
              your next event
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Women Collection
            </h2>
            <p className="mx-auto mt-4 max-w-md text-gray-500 2xl:py-5">
              Explore our women's collection of stylish and versatile clothing
              for every occasion. Shop now and find the perfect outfit.
            </p>
          </div>
        )}
      </OpacityAnimation>
    </header>
  );
}

IntroShop.propTypes = {
  gender: PropTypes.string.isRequired,
};
