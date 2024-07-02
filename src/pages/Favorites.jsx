import { useEffect } from "react";
import useFavoritesStore from "../store/useFavoritesStore.jsx";
import EmptyFavorites from "../components/favorites/EmptyFavorites.jsx";
import LikesFavorites from "../components/favorites/LikesFavorites.jsx";

export default function Favorites() {
  const { favorites, getFavorites } = useFavoritesStore();

  useEffect(() => {
    getFavorites();
  }, [getFavorites]);

  return (
    <div>
      {favorites.length === 0 ? <EmptyFavorites /> : <LikesFavorites />}
    </div>
  );
}
