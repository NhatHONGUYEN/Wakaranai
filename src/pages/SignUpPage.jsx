import signuUpPic from "/signuppage.jpg";
import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import OpacityAnimation from "../animations/OpacityAnimation";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpWithEmailAndPassword } = useAuthStore(); // Destructure the functions from the store
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUpWithEmailAndPassword(email, password);
      // Sign-up successful.
      navigate("/");
    } catch (error) {
      // An error happened.
      console.error("Error signing up:", error);
    }
  };

  return (
    <OpacityAnimation className="w-full h-screen">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className=" font-Pinot font-bold tracking-tight text-gray-900 ">
                Wakaranai
              </h1>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create an account
              </h2>
            </div>

            <div className="mt-10">
              <div>
                <form
                  onSubmit={handleSubmit}
                  method="POST"
                  className="space-y-6"
                >
                  <div>
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

                  <div>
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

                  <div className="flex items-center justify-between">
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

                  <div>
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
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={signuUpPic}
            loading="lazy"
            alt="signUpPic"
          />
        </div>
      </div>
    </OpacityAnimation>
  );
}
