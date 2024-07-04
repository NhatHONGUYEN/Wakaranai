import useCartStore from "../../../store/useCartStore.jsx";
import useAuthStore from "../../../store/useAuthStore.jsx";
import { useState, useEffect } from "react";
import Basket from "../../Basket.jsx";
import BasketButton from "./BasketButton.jsx";
import FavoriteButton from "./FavoriteButton.jsx";
import NoUserNav from "./NoUserNav.jsx";

export default function NavBarRight() {
  const [open, setOpen] = useState(false);
  const { basket, updateBasketCount } = useCartStore();
  const { user } = useAuthStore();

  useEffect(() => {
    updateBasketCount();
  }, [basket, updateBasketCount]);

  return (
    <div className="navbar-end">
      <BasketButton setOpen={setOpen} />
      <Basket open={open} setOpen={setOpen} />
      {user ? <FavoriteButton /> : <NoUserNav />}
    </div>
  );
}
