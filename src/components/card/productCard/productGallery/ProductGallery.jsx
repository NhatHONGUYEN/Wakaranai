import PropTypes from "prop-types";
import ProductTabList from "./ProductTabList";
import ProductTabPanel from "./ProductTabPanel";
import { TabGroup } from "@headlessui/react";
import { useState } from "react";

export default function ProductGallery({ product }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <TabGroup
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
        className="flex flex-col-reverse"
      >
        {/* Image selector */}
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <ProductTabList
            images={product.image}
            name={product.name}
            videos={product.videos}
          />
        </div>
        <ProductTabPanel
          images={product.image}
          name={product.name}
          videos={product.videos}
        />
      </TabGroup>
    </div>
  );
}

ProductGallery.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
    videos: PropTypes.string,
  }).isRequired,
};
