import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";
import { HeartIcon } from "@heroicons/react/16/solid";
import useCartStore from "../../../store/useCartStore.jsx";
import useFavoritesStore from "../../../store/useFavoritesStore.jsx";
import { motion } from "framer-motion";

export default function ProductButton({ product }) {
  const notify = () =>
    toast.success("Added to favorites!", {
      style: {
        background: "#6366F1",
        color: "#FFFFFF",
      },
    });
  const notifyBasket = () =>
    toast.success("Added to shopping Cart", {
      style: {
        background: "#6366F1",
        color: "#FFFFFF",
      },
    });

  const { addItemToBasket } = useCartStore();
  const { addToFavorites } = useFavoritesStore();

  const onAddToBasket = () => {
    addItemToBasket({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image[0],
    });
    notifyBasket();
  };

  return (
    <div className="mt-6">
      <div className="mt-10 flex">
        <Toaster />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onAddToBasket}
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to bag
        </motion.button>

        <div>
          <Toaster />
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            onClick={() => {
              addToFavorites(product);
              notify();
            }}
          >
            <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

ProductButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
