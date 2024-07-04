import { useEffect } from "react";
import useFavoritesStore from "../../store/useFavoritesStore.jsx";
import EmptyFavorites from "./EmptyFavorites.jsx";
import LikesFavorites from "./LikesFavorites.jsx";

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
