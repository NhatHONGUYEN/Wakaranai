import PropTypes from "prop-types";
import { Tab, TabList } from "@headlessui/react";

export default function ProductTabList({ images, name, videos }) {
  return (
    <TabList className="grid grid-cols-4 gap-6">
      {/* Add image */}
      {images.map((imgSrc, id) => (
        <Tab
          key={`image-${id}`}
          className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
        >
          <span className="sr-only">{name}</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <img
              src={imgSrc}
              alt={name}
              loading="lazy"
              className="h-full w-full object-cover object-center"
            />
          </span>
        </Tab>
      ))}

      {/* Add video if its available */}
      {videos && (
        <Tab className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4">
          {" "}
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <video
              src={videos}
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
  );
}

ProductTabList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  videos: PropTypes.string,
};
