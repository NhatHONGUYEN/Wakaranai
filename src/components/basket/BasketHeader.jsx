import { DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
import useCartStore from "../../store/useCartStore.jsx";
import BasketItemCard from "./BasketItemCard";

export default function BasketHeader({ setOpen }) {
  const { basket } = useCartStore();

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
      <div className="flex items-start justify-between">
        <DialogTitle className="text-lg font-medium text-gray-900">
          Shopping cart
        </DialogTitle>
        <div className="ml-3 flex h-7 items-center">
          <button
            type="button"
            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
            onClick={() => setOpen(false)}
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Close panel</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {basket.map((item) => {
              return <BasketItemCard key={item.id} item={item} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
BasketHeader.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
