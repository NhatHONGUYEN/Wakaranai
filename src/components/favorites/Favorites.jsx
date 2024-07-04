import { useEffect } from "react";
import useFavoritesStore from "../../store/useFavoritesStore.jsx";
import EmptyFavorites from "./EmptyFavorites.jsx";
import LikesFavorites from "./LikesFavorites.jsx";

export default function Favorites() {
  const { favorites, getFavorites } = useFavoritesStore();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div>
      {favorites.length === 0 ? <EmptyFavorites /> : <LikesFavorites />}
    </div>
  );
}
