import PropTypes from "prop-types";
import { TabPanel, TabPanels } from "@headlessui/react";

export default function ProductTabPanel({ images, name, videos }) {
  return (
    <TabPanels className="aspect-h-1 aspect-w-2 w-full">
      {/* Add image */}
      {images.map((imgSrc, id) => (
        <TabPanel key={`image-${id}`}>
          <img
            src={imgSrc}
            alt={`${name} ${id}`}
            loading="lazy"
            className="h-full w-full object-cover object-center sm:rounded-lg"
          />
        </TabPanel>
      ))}
      {videos && (
        <TabPanel className="aspect-h-1 aspect-w-2 w-full" key="video">
          {/* Add video */}
          <video
            src={videos}
            autoPlay
            loop
            muted
            loading="lazy"
            className="h-full w-full object-cover object-center sm:rounded-lg"
          ></video>
        </TabPanel>
      )}
    </TabPanels>
  );
}

ProductTabPanel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  videos: PropTypes.string,
};
