import PropTypes from "prop-types";

export default function DeleteButton({ onClick }) {
  return (
    <button
      type="button"
      className="btn btn-ghost btn-circle lg:transition-transform lg:duration-300 group-hover:lg:scale-110"
      onClick={onClick}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span className="sr-only">Delete</span>
    </button>
  );
}
DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
