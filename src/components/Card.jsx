import PropTypes from "prop-types";
import ButtonAdd from "../reusable ui/ButtonAdd";

export default function Card({ index, itemImages, name, price }) {
  return (
    <div>
      <li key={index}>
        <a className="group block overflow-hidden relative">
          <img
            src={itemImages[name] || ""} // Use the corresponding image or the default image
            alt={name}
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />
          <div className="absolute z-50 bottom-20 left-0 right-0 flex justify-center items-center transition-transform duration-300 group-hover:translate-y-[-20px]">
            <ButtonAdd />
          </div>
          <div className="relative bg-white pt-3">
            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
              {name}
            </h3>
            <p className="mt-2">
              <span className="sr-only"> Regular Price </span>
              <span className="tracking-wider text-gray-900">${price}</span>
            </p>
          </div>
        </a>
      </li>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  itemImages: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
