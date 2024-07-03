import { useParams } from "react-router-dom";
import Clothes from "../../utils/Clothes";
import ProductGallery from "./productCard/ProductGallery";
import ProductDetails from "./productCard/ProductDetails.jsx";
import ProductDescription from "./productCard/ProductDescription.jsx";
import ProductButton from "./productCard/ProductButton.jsx";
import OpacityAnimation from "../../animations/OpacityAnimation.jsx";

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
    <OpacityAnimation className="bg-white ">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}

          <ProductGallery product={product} />

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductDescription product={product} />
            <ProductButton product={product} />
            <ProductDetails product={product} />
          </div>
        </div>
      </div>
    </OpacityAnimation>
  );
}
