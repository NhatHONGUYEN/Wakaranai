import { useNavigate } from "react-router-dom";
import womanEmptyFavorites from "/Womanemptyfav.mp4";

export default function EmptyFavorites() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(-1);
  };

  return (
    <main className="isolate z-50 h-screen relative">
      <video
        src={womanEmptyFavorites}
        alt=""
        autoPlay
        loop
        muted
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-base font-semibold leading-8 text-white">Wait</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Your favorites are empty
          </h1>
          <p className="mt-4 text-base text-white/70 sm:mt-6">
            Go back to the home page and add some favorites
          </p>
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleBackToHome}
              className="text-sm btn btn-ghost font-semibold leading-7 text-white hover:translate-x-[-5px] transition-transform"
            >
              <span className="" aria-hidden="true">
                &larr;
              </span>{" "}
              Back to home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
