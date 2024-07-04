import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Basket from "./components/Basket";
import { useState } from "react";
import ProductCard from "./components/card/ProductCard";
import SignUpPage from "./pages/SignUpPage";
import Favorites from "./pages/Favorites";
import NavBar from "./components/navBar/NavBar.jsx";
import NotFinish from "./pages/NotFinish";
import Shop from "./components/shop/Shop"; // import the Shop component

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        {/* add the Shop component here */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/basket"
          element={<Basket open={open} setOpen={setOpen} />}
        />
        <Route path="/error" element={<Error />} />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/product/:itemId" element={<ProductCard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notfinish" element={<NotFinish />} />
      </Routes>
    </>
  );
}

export default App;
