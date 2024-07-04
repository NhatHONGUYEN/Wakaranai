import useAuthStore from "../store/useAuthStore.jsx";
import pulloverWoman from "/pullFemme (2).jpg";
import OpacityAnimation from "../animations/OpacityAnimation.jsx";
import LoginForm from "../components/login/LoginForm.jsx";
import LoginLink from "../components/login/LoginLink.jsx";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInWithEmailAndPassword } = useAuthStore(); // Destructure the functions from the store
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <OpacityAnimation className="w-full h-screen">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <LoginLink />
            <LoginForm
              handleSubmit={handleSubmit}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
        <div className="Image relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={pulloverWoman}
            alt="pulloverWoman"
            loading="lazy"
          />
        </div>
      </div>
    </OpacityAnimation>
  );
}
