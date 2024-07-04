import { useNavigate } from "react-router-dom";
import womanEmptyFavorites from "/Womanemptyfav.mp4";

export default function EmptyFavorites() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate(-1);
  };

  return (
    <main className="relative isolate min-h-screen">
      <video
        src={womanEmptyFavorites}
        alt="womanEmptyFavorites"
        autoPlay
        loop
        muted
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
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
            className="text-sm btn btn-ghost font-semibold leading-7 text-white"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </button>
        </div>
      </div>
    </main>
  );
}
