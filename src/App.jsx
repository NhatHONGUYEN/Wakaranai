import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Error from "./pages/Error";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Shop from "./pages/Shop";

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
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
