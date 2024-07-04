import signuUpPic from "/signuppage.jpg";
import useAuthStore from "../../store/useAuthStore";
import OpacityAnimation from "../../animations/OpacityAnimation";
import SignUpForm from "./SignUpForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            {/* Title */}
            <div>
              <h1 className=" font-Pinot font-bold tracking-tight text-gray-900 ">
                Wakaranai
              </h1>
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create an account
              </h2>
            </div>

            <SignUpForm
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
        {/* Image */}
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
