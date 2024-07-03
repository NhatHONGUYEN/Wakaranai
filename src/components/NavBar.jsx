import NavBarRight from "./NavBarRight";
import { motion } from "framer-motion";
import NavBarLeft from "./NavBarLeft";

export default function NavBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="navbar absolute top-0 z-40 "
    >
      <NavBarLeft />
      <div className="navbar-center hidden lg:block">
        <p className=" text-xl ">WAKARANAI</p>
      </div>
      <NavBarRight />
    </motion.div>
  );
}
