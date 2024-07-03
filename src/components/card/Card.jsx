import PropTypes from "prop-types";
import ButtonAdd from "../../reusable ui/ButtonAdd";
import useCartStore from "../../store/useCartStore";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export default function Card({ id, itemImages, name, price }) {
  const { addItemToBasket } = useCartStore();
  const navigate = useNavigate();

  const notifyBasket = () =>
    toast.success("Added to shopping Cart", {
      style: {
        background: "#6366F1",
        color: "#FFFFFF",
      },
    });

  const onAddToBasket = () => {
    addItemToBasket({ id, name, price, image: itemImages[name] });
    notifyBasket();
  };

  const handleImageClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <li
        key={id}
        className="block overflow-hidden group rounded md:rounded-none"
      >
        <div className="group block overflow-hidden relative ">
          <img
            src={itemImages[name] || ""}
            alt={name}
            loading="lazy"
            className="h-52 w-full object-cover transition duration-500 sm:h-[450px] lg:group-hover:scale-105"
            onClick={handleImageClick}
          />
          <div>
            <Toaster />
            <div className="absolute z-50 bottom-20 left-0 right-0 flex justify-center items-center lg:transition-transform lg:duration-300 group-hover:lg:translate-y-[-20px]">
              <ButtonAdd onClick={onAddToBasket} />
            </div>
          </div>
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {name}
            </h3>
            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>
              <span className="tracking-wider text-gray-900">{price}€</span>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  itemImages: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
