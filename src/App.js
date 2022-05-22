import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/header/Header";
import Purchase from "./pages/purchase/Purchase";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
