import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BasketFooter({ totalAmount, setOpen }) {
  return (
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>{totalAmount}</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      {/* CheCkout */}
      <div className="mt-6">
        <Link
          onClick={() => setOpen(false)}
          to={"/notfinish"}
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </Link>
      </div>
      {/* Continue Shopping */}
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or{" "}
          <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => setOpen(false)}
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
}
BasketFooter.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  setOpen: PropTypes.func.isRequired,
};
