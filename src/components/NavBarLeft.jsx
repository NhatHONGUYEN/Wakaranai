import { Link, useNavigate } from "react-router-dom";

export default function NavBarLeft() {
  const navigate = useNavigate();

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
        </div>
        <ul
          tabIndex={0}
          className="menu menu-lg  bg-indigo-600 dropdown-content text-3xl rounded-box z-[1] mt-3 w-40 py-4   shadow text-slate-200 transform scale-150 transition-transform duration-2000"
          style={{ transformOrigin: "top left" }}
        >
          <li>
            <button
              onClick={() => navigate("/")}
              className="hover:translate-x-2 transition-transform hover:slate-200 mr-4"
            >
              Homepage
            </button>
          </li>
          <li>
            <Link
              to="/womanshop"
              className="hover:translate-x-2 transition-transform my-3 hover:slate-200 mr-4"
            >
              Women
            </Link>
          </li>
          <li>
            <Link
              to="/manshop"
              className="hover:translate-x-2 transition-transform hover:slate-200 mr-4"
            >
              Men
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
