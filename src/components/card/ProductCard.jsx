import { useParams } from "react-router-dom";
import Clothes from "../../utils/Clothes";

export default function ProductCard() {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const findProduct = (clothes) => {
    for (const gender in clothes.Clothes) {
      for (const item of clothes.Clothes[gender].items) {
        if (item.id === productId) {
          return item;
        }
      }
    }
    return null;
  };

  const product = findProduct(Clothes[0]);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <div>
        {product.image.map((imgSrc, index) => (
          <img key={index} src={imgSrc} alt={`${product.name} ${index + 1}`} />
        ))}
      </div>
      <p>Prix: {product.price}€</p>
      <p>Quantité: {product.quantity}</p>
    </div>
  );
}
