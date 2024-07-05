import DeleteButton from "../../reusable ui/DeleteButton.jsx";
import ButtonAdd from "../../reusable ui/ButtonAdd.jsx";
import useFavoritesStore from "../../store/useFavoritesStore.jsx";
import useCartStore from "../../store/useCartStore.jsx";
import PropTypes from "prop-types";
import { Toaster, toast } from "sonner";

export default function FavoritesButton({ item, id }) {
  const { deleteFavorite } = useFavoritesStore();
  const { addItemToBasket } = useCartStore();

  const notifyBasket = () =>
    toast.success("Added to shopping Cart", {
      style: {
        background: "#6366F1",
        color: "#FFFFFF",
      },
    });

  const onAddToBasket = (item) => {
    addItemToBasket(item);
    notifyBasket();
  };

  const onDeleteFavorite = (itemId) => {
    deleteFavorite(itemId);
  };

  return (
    <div>
      <div>
        <Toaster />
        <div className="absolute z-50 bottom-20 left-0 right-0 flex justify-center items-center lg:transition-transform lg:duration-300 group-hover:lg:translate-y-[-20px]">
          <ButtonAdd onClick={() => onAddToBasket(item)} />
        </div>
      </div>
      <div className="absolute z-50 top-4 right-4">
        <DeleteButton onClick={() => onDeleteFavorite(id)} />
      </div>
    </div>
  );
}
FavoritesButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
};
