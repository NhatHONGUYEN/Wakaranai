import PropTypes from "prop-types";
import manVideo from "/Manvideo (1).mp4";
import womanVideo from "/Womanvideo (2).mp4";
import { Link } from "react-router-dom";

export default function LinkCategory({ setVideoSrc }) {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6">
      {/* Link to women's collection */}
      <Link
        to={`/shop?gender=female`}
        className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="#"
        onMouseEnter={() => setVideoSrc(womanVideo)}
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-sm font-medium transition-all group-hover:me-4">
          {" "}
          For her{" "}
        </span>
      </Link>
      {/* Link to men's collection */}
      <Link
        to={`/shop?gender=male`}
        className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="#"
        onMouseEnter={() => setVideoSrc(manVideo)}
      >
        <span className="absolute -end-full transition-all group-hover:end-4">
          <svg
            className="size-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>

        <span className="text-sm font-medium transition-all group-hover:me-4">
          {" "}
          For him{" "}
        </span>
      </Link>
    </div>
  );
}

LinkCategory.propTypes = {
  setVideoSrc: PropTypes.func.isRequired,
};
