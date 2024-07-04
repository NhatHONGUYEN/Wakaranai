import { Link } from "react-router-dom";

export default function NoUserNav() {
  return (
    <div className="flex mr-11 md:space-x-4 ">
      <Link to="/login" className="btn btn-ghost">
        Sign In
      </Link>
      <Link to="/signup" className="btn btn-primary">
        Sign Up
      </Link>
    </div>
  );
}
