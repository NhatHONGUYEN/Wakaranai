import { create } from "zustand";
import { db, auth } from "../Api/Firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import "firebase/auth";

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: async (item) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const favoritesRef = collection(userRef, "favorites");
      await addDoc(favoritesRef, {
        itemId: item.id,
        name: item.name,
        price: item.price,
        image: item.image[0],
      });
      console.log("Item added to favorites");
    } catch (error) {
      console.error("Error adding item to favorites: ", error);
    }
  },
  getFavorites: async () => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const favoritesRef = collection(userRef, "favorites");
      const querySnapshot = await getDocs(favoritesRef);
      const favorites = querySnapshot.docs.map((doc) => doc.data());
      set({ favorites });
    } catch (error) {
      console.error("Error getting favorites: ", error);
    }
  },
}));

export default useFavoritesStore;
