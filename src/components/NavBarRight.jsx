import Basket from "./Basket";
import { useState, useEffect } from "react";
import useCartStore from "../store/useCartStore";
import useAuthStore from "../store/useAuthStore"; // Import the useAuthStore
import { Link, useNavigate } from "react-router-dom";

export default function NavBarRight() {
  const [open, setOpen] = useState(false);
  const { basket, basketCount, updateBasketCount } = useCartStore();
  const { user, signOut } = useAuthStore();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      // Sign-out successful.
      navigate("/");
    } catch (error) {
      // An error happened.
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    updateBasketCount();
  }, [basket, updateBasketCount]);

  return (
    <div className="navbar-end">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="btn btn-ghost btn-circle"
      >
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="badge badge-xs badge-primary indicator-item">
            {basketCount}
          </span>
        </div>
      </button>
      <Basket open={open} setOpen={setOpen} />
      {user ? (
        <div>
          <button className="btn btn-ghost ml-4 ">Account</button>
          <button onClick={handleSignOut} className="btn btn-ghost">
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex mr-11 md:space-x-4">
          <Link to="/login" className="btn btn-ghost">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-primary">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
