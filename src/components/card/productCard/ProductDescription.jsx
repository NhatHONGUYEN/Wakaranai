import PropTypes from "prop-types";

export default function ProductDescription({ product }) {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {product.name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">
          {product.price}€
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </div>
  );
}

ProductDescription.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
