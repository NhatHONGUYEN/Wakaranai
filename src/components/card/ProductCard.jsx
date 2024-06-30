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

  console.log(product);

  return (
    <div className="text-center p-4 border border-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex justify-center mb-4">
        {product.image.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${product.name} ${index + 1}`}
            className="w-48 h-48 object-cover"
          />
        ))}
      </div>
      <p className="text-lg mb-2">Price: {product.price}€</p>
      <p className="text-lg">Quantity: {product.quantity}</p>
    </div>
  );
}
