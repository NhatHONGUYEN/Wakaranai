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
import NavBar from "./components/NavBar";
import NotFinish from "./pages/NotFinish";
import { lazy, Suspense } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const WomanShop = lazy(() => import("./pages/WomanShop"));
  const ManShop = lazy(() => import("./pages/ManShop"));
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
        <Route
          path="/womanshop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <WomanShop />
            </Suspense>
          }
        />
        <Route
          path="/manshop"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ManShop />
            </Suspense>
          }
        />
        <Route path="/product/:id" element={<ProductCard />} />
        <Route path="/product/:itemId" element={<ProductCard />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/notfinish" element={<NotFinish />} />
      </Routes>
    </>
  );
}

export default App;
