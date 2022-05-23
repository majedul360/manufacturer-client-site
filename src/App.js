import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/header/Header";
import Purchase from "./pages/purchase/Purchase";
import Registar from "./pages/registar/Registar";
import Login from "./pages/login/Login";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
