import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BackgroundSquare from "../../reusable ui/BackgroundSquare";
import IntroShop from "./IntroShop";
import ProductDisplay from "./ProductDisplay";
import OpacityAnimation from "../../animations/OpacityAnimation";

export default function Shop() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const gender = query.get("gender");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <OpacityAnimation className="w-full h-full relative">
      <BackgroundSquare />
      <section className="flex h-full lg:h-screen items-center justify-center">
        <div className="max-w-full-xl px-4 pt-20 sm:px-6 sm:py-12 md:my-20 lg:px-8">
          <IntroShop gender={gender} />
          <ProductDisplay gender={gender} />
        </div>
      </section>
    </OpacityAnimation>
  );
}
