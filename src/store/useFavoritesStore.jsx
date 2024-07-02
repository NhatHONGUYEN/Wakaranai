import { create } from "zustand";
import { db, auth } from "../Api/Firebase";
import { v4 as uuidv4 } from "uuid";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import "firebase/auth";

const useFavoritesStore = create((set) => ({
  favorites: [],
  addToFavorites: async (item) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const favoritesRef = collection(userRef, "favorites");
      await addDoc(favoritesRef, {
        id: uuidv4(), // generate a unique ID for the item
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

  deleteFavorite: async (itemId) => {
    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      const favoritesRef = collection(userRef, "favorites");
      const q = query(favoritesRef, where("itemId", "==", itemId));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref);
      });
      console.log("Item removed from favorites");
    } catch (error) {
      console.error("Error removing item from favorites: ", error);
    }
  },
}));

export default useFavoritesStore;
