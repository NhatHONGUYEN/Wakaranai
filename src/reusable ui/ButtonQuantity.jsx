import PropTypes from "prop-types";
import useCartStore from "../store/useCartStore";

export default function ButtonQuantity({ itemId }) {
  const { increaseQuantity, decreaseQuantity, getItemById } = useCartStore();
  const item = getItemById(itemId);

  const onIncreaseQuantity = () => {
    increaseQuantity(itemId);
  };

  const onDecreaseQuantity = () => {
    decreaseQuantity(itemId);
  };

  return (
    <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        onClick={onDecreaseQuantity}
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        -
      </button>
      <button
        type="input"
        className="relative -ml-px inline-flex items-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        {item ? item.quantity : 0}
      </button>
      <button
        onClick={onIncreaseQuantity}
        type="button"
        className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
      >
        +
      </button>
    </span>
  );
}

ButtonQuantity.propTypes = {
  itemId: PropTypes.number.isRequired,
};
