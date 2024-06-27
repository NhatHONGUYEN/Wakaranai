import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import WomanShop from "./pages/WomanShop";
import ManShop from "./pages/ManShop";
import Basket from "./components/Basket";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <NavBar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/error" element={<Error />} />
        <Route path="/womanshop" element={<WomanShop />} />
        <Route path="/manshop" element={<ManShop />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
