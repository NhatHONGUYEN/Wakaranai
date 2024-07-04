import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./components/login/Login.jsx";
import Error from "./pages/Error";
import Basket from "./components/Basket";
import { useState } from "react";
import ProductCard from "./components/card/ProductCard";
import SignUpPage from "./components/signUp/SignUpPage.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import NotFinish from "./pages/NotFinish";
import Shop from "./components/shop/Shop";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shop" element={<Shop />} />
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
