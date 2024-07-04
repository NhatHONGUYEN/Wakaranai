import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function NavBarLeft() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-start z-50">
      <div className="dropdown">
        <button
          onClick={handleMenuClick}
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        {isMenuOpen && (
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
        )}
      </div>
    </div>
  );
}
