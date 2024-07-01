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

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
      </Routes>
    </>
  );
}

export default App;
