import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Basket from "./pages/Basket";
import Error from "./pages/Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;
