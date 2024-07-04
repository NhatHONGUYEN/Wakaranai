import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function BurgerList({ setIsMenuOpen }) {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <motion.ul
      tabIndex={0}
      className="menu menu-lg bg-indigo-600 dropdown-content text-3xl rounded-box z-[1] mt-3 w-40 py-4 shadow text-slate-200"
      initial={{ x: "-100%", scale: 0 }}
      animate={{ x: "0%", scale: 1 }}
      exit={{ x: "-100%", scale: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <li>
        <button
          onClick={() => {
            navigate("/");
            handleLinkClick();
          }}
          className="hover:translate-x-2 transition-transform hover:slate-200 mr-4"
        >
          Homepage
        </button>
      </li>
      <li>
        <Link
          to="/womanshop"
          onClick={handleLinkClick}
          className="hover:translate-x-2 transition-transform my-3 hover:slate-200 mr-4"
        >
          Women
        </Link>
      </li>
      <li>
        <Link
          to="/manshop"
          onClick={handleLinkClick}
          className="hover:translate-x-2 transition-transform hover:slate-200 mr-4"
        >
          Men
        </Link>
      </li>
    </motion.ul>
  );
}

BurgerList.propTypes = {
  setIsMenuOpen: PropTypes.func.isRequired,
};
