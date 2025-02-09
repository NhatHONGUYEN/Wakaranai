import PropTypes from "prop-types";
import ButtonQuantity from "../../reusable ui/ButtonQuantity";
import useCartStore from "../../store/useCartStore";
import { useEffect } from "react";

export default function BasketItemCard({ item }) {
  const { removeItemFromBasket, updateTotalItemAmount } = useCartStore();

  const onRemoveItem = () => {
    removeItemFromBasket(item.id);
  };

  useEffect(() => {
    updateTotalItemAmount();
  }, [item.quantity, updateTotalItemAmount]);

  return (
    <div>
      <li key={item.id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a>{item.name}</a>
              </h3>
              <p className="ml-4">{item.totalItemAmount}</p>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <ButtonQuantity itemId={item.id} />

            <div className="flex">
              <button
                onClick={onRemoveItem}
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}

BasketItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string, // Make the image prop optional
    totalItemAmount: PropTypes.number.isRequired, // Add totalItemAmount prop
  }).isRequired,
};
