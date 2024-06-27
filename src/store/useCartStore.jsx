import { create } from "zustand";

const useCartStore = create((set, get) => ({
  basket: [],

  addItemToBasket: (item) => {
    const itemExists = get().basket.find(
      (basketItem) => basketItem.id === item.id
    );
    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      }
      set({ basket: [...get().basket] });
    } else {
      set({
        basket: [
          ...get().basket,
          {
            ...item,
            quantity: 1,
          },
        ],
      });
    }
  },

  increaseQuantity: (productId) => {
    const itemExists = get().basket.find(
      (basketItem) => basketItem.id === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        itemExists.quantity++;
      }

      set({ basket: [...get().basket] });
    }
  },
  decreaseQuantity: (productId) => {
    const itemExists = get().basket.find(
      (basketItem) => basketItem.id === productId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        if (itemExists.quantity === 1) {
          const updatedBasketItems = get().basket.filter(
            (item) => item.id !== productId
          );
          set({ basket: updatedBasketItems });
        } else {
          itemExists.quantity--;
          set({ basket: [...get().basket] });
        }
      }
    }
  },
  removeItemFromBasket: (itemId) => {
    const itemExists = get().basket.find(
      (basketItem) => basketItem.id === itemId
    );

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        const updatedBasketItems = get().basket.filter(
          (item) => item.id !== itemId
        );
        set({ cartItems: updatedBasketItems });
      }
    }
  },
}));
export default useCartStore;
