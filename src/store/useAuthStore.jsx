// useAuthStore.js
import { create } from "zustand";
import { auth } from "../Api/Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

// Create a GoogleAuthProvider instance
const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
  user: null,
  favorites: [],

  // Sign up with email and password
  signUpWithEmailAndPassword: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user });
    } catch (error) {
      console.error("Error signing up:", error);
    }
  },

  // Sign in with email and password
  signInWithEmailAndPassword: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      set({ user: userCredential.user });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  },

  // Sign in with Google
  signInWithGoogle: async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      set({ user: result.user });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  },

  // Sign out
  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      console.error("Error signing out:", error);
    }
  },

  // Set user on mount
  setUser: (user) => set({ user }),
}));

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user);
});

export default useAuthStore;
