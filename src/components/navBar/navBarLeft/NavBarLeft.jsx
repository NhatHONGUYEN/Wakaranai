import { useState } from "react";

import BurgerList from "./BurgerList";

export default function NavBarLeft() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
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

        {isMenuOpen && <BurgerList setIsMenuOpen={setIsMenuOpen} />}
      </div>
    </div>
  );
}
