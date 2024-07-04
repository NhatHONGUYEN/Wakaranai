import { Link } from "react-router-dom";

export default function NavBarCenter() {
  return (
    <div className="navbar-center hidden lg:block">
      <Link
        to={"/"}
        className=" font-Pinot font-bold tracking-tight text-gray-900 text-sm "
      >
        Wakaranai
      </Link>
    </div>
  );
}
