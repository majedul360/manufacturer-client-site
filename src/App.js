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
import Blogs from "./pages/blogs/Blogs";
import NotFound from "./pages/notFound/NotFound";
import MyPortfolio from "./pages/myPortfolio/MyPortfolio";
import MakeAdmin from "./pages/dashboard/MakeAdmin";
import RequireAdmin from "./requireAdmin/RequireAdmin";
import AddProduct from "./pages/dashboard/AddProduct";
import Payment from "./payment/Payment";
import ManageAllOrders from "./pages/dashboard/manageAllOrders/ManageAllOrders";
import ManageProducts from "./pages/dashboard/ManageProducts";
import RequireUser from "./RequireUser/RequireUser";
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
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="my-orders"
            element={
              <RequireUser>
                <MyOrders />
              </RequireUser>
            }
          />
          <Route
            path="add-review"
            element={
              <RequireUser>
                <AddReview />
              </RequireUser>
            }
          />
          <Route path="my-profile" element={<MyProfile />} />
          <Route
            path="makeAdmin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          />
          <Route
            path="addProduct"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          />
          <Route
            path="manageAllOrders"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          />
          <Route
            path="manageProducts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          />
          <Route path="payment/:id" element={<Payment />} />
        </Route>
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/registar" element={<Registar />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
