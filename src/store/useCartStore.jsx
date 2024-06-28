import { create } from "zustand";

const useCartStore = create((set, get) => ({
  basket: [],
  Clothes: [],
  totalAmount: 0,

  getItemById: (productId) => {
    return get().basket.find((item) => item.id === productId);
  },

  updateTotalAmount: () => {
    const total = get().basket.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    const formattedTotal = new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
    }).format(total);
    set({ totalAmount: formattedTotal });
  },

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
    get().updateTotalAmount();
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
      get().updateTotalAmount();
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
      get().updateTotalAmount();
    }
  },

  removeItemFromBasket: (id) => {
    const itemExists = get().basket.find((basketItem) => basketItem.id === id);

    if (itemExists) {
      if (typeof itemExists.quantity === "number") {
        const updatedBasketItems = get().basket.filter(
          (item) => item.id !== id
        );
        set({ basket: updatedBasketItems });
      }
      get().updateTotalAmount();
    }
  },
}));

export default useCartStore;
