import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./shared/header/Header";
import Purchase from "./pages/purchase/Purchase";
import Registar from "./pages/registar/Registar";
import Login from "./pages/login/Login";
import RequireAuth from "./requireAuth/RequireAuth";
import Dashboard from "./pages/dashboard/Dashboard";
import MyOrders from "./pages/dashboard/MyOrders";
import AddReview from "./pages/dashboard/AddReview";
import MyProfile from "./pages/dashboard/MyProfile";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="add-review" element={<AddReview />} />
          <Route path="my-profile" element={<MyProfile />} />
        </Route>
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
