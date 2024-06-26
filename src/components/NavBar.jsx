import { useState, useEffect } from "react";
import { motion, useScroll, useVelocity } from "framer-motion";

export default function NavBar() {
  const slideDistance = 80;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    scrollVelocity.on("change", (latest) => {
      if (latest > 0) {
        setIsScrollingBack(false);
        return;
      }
      if (latest < -threshold) {
        setIsScrollingBack(true);
        return;
      }
    });
  }, []);

  useEffect(() => {
    scrollY.on("change", (latest) => setIsAtTop(latest <= 0));
  }, []);

  useEffect(() => {
    setIsInView(isScrollingBack || isAtTop);
  }, [isScrollingBack, isAtTop]);

  return (
    <motion.div
      className="navbar"
      animate={{ y: isInView ? 0 : -slideDistance }}
      transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
      style={{ height: slideDistance }}
    >
      <h1>WAKARANAI</h1>
    </motion.div>
  );
}
