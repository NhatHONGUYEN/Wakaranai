import { Link } from "react-router-dom";

export default function LoginLink() {
  return (
    <div>
      <Link
        to={"/"}
        className=" font-Pinot font-bold tracking-tight text-gray-900 "
      >
        Wakaranai
      </Link>
      <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <Link to={"/signup"} className="mt-2 text-sm leading-6 text-gray-500">
        Not a member?{" "}
      </Link>
    </div>
  );
}
