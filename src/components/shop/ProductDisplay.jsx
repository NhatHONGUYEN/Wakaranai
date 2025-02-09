import { useNavigate } from "react-router-dom";

import Clothes from "../../utils/Clothes";
import Card from "../card/Card";
import PropTypes from "prop-types";
// Images
import { itemImages } from "../../utils/ItemImages.jsx";

export default function ProductDisplay({ gender }) {
  const navigate = useNavigate({ gender });

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <ul className="mt-8 grid gap-4 grid-cols-2 lg:grid-cols-4">
      {Clothes[0].Clothes[gender].items.map((item) => {
        console.log(item.id); // Log the id of each item
        return (
          <div key={item.id}>
            <Card
              id={item.id}
              itemImages={itemImages}
              name={item.name}
              price={item.price}
              onClick={() => handleCardClick(item.id)}
            />
          </div>
        );
      })}
    </ul>
  );
}

ProductDisplay.propTypes = {
  gender: PropTypes.string.isRequired,
};
