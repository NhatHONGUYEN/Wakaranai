import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PropTypes from "prop-types";
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
          <TabList className="grid grid-cols-4 gap-6">
            {product.image.map((imgSrc, id) => (
              <Tab
                key={`image-${id}`}
                className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
              >
                <span className="sr-only">{product.name}</span>
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    src={imgSrc}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                </span>
              </Tab>
            ))}
            {product.videos && (
              <Tab className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
                {" "}
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <video
                    src={product.videos}
                    autoPlay
                    loop
                    muted
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  ></video>
                </span>
              </Tab>
            )}
          </TabList>
        </div>
        <TabPanels className="aspect-h-1 aspect-w-2 w-full">
          {product.image.map((imgSrc, id) => (
            <TabPanel key={`image-${id}`}>
              <img
                src={imgSrc}
                alt={`${product.name} ${id}`}
                loading="lazy"
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          ))}
          {product.videos && (
            <TabPanel className="aspect-h-1 aspect-w-2 w-full" key="video">
              <video
                src={product.videos}
                autoPlay
                loop
                muted
                loading="lazy"
                className="h-full w-full object-cover object-center sm:rounded-lg"
              ></video>
            </TabPanel>
          )}
        </TabPanels>
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
