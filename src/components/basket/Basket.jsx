import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import PropTypes from "prop-types";
import useCartStore from "../../store/useCartStore.jsx";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";

export default function Basket({ open, setOpen }) {
  const { totalAmount } = useCartStore();

  return (
    <Dialog className="relative z-50" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                {/* Basket header */}
                <BasketHeader setOpen={setOpen} />
                {/* Basket Bottom */}
                <BasketFooter totalAmount={totalAmount} setOpen={setOpen} />
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}

Basket.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
