import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import WomanShop from "./pages/WomanShop";
import ManShop from "./pages/ManShop";
import Basket from "./components/Basket";
import { useState } from "react";
import ProductCard from "./components/card/ProductCard";
import SignUpPage from "./pages/SignUpPage";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/basket"
          element={<Basket open={open} setOpen={setOpen} />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="/womanshop" element={<WomanShop />} />
        <Route path="/manshop" element={<ManShop />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
