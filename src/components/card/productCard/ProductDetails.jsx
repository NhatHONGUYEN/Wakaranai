import PropTypes from "prop-types";
import classNames from "classnames";
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { motion } from "framer-motion";

export default function ProductDetails({ product }) {
  return (
    <div>
      {" "}
      <section aria-labelledby="details-heading" className="mt-12">
        <h2 id="details-heading" className="sr-only">
          Additional details
        </h2>

        <div className="divide-y divide-gray-200 border-t">
          {product.details.map((detail) => (
            <Disclosure as="div" key={detail.name}>
              {({ open }) => (
                <>
                  {/* Button for the dropdownList */}
                  <h3>
                    <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                      <span
                        className={classNames(
                          open ? "text-indigo-600" : "text-gray-900",
                          "text-sm font-medium"
                        )}
                      >
                        {detail.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon
                            className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusIcon
                            className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </DisclosureButton>
                  </h3>
                  {/* Details List */}
                  <DisclosurePanel as="div" className="prose prose-sm pb-6">
                    <motion.ul
                      role="list"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {detail.items.map((item) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </section>
    </div>
  );
}

ProductDetails.propTypes = {
  product: PropTypes.shape({
    details: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      })
    ).isRequired,
  }).isRequired,
};
