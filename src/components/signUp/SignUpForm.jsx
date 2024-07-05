import PropTypes from "prop-types";

export default function SignUpForm({ handleSubmit, setEmail, setPassword }) {
  return (
    <div className="mt-10">
      <div>
        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div className="Email">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`block  w-full rounded-md border-0 pl-2 py-1.5 shadow-sm ring-1 ring-inset "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div className="Password">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className={`block w-full rounded-md border-0 pl-2 py-1.5 shadow-sm ring-1 ring-inset "ring-red-500" : "ring-gray-300"
              } placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>

          <div className="Remember flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 block text-sm leading-6 text-gray-700"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <a className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div className="Signup">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
};
