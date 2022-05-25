import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/Firebase.int";
import ManageOrdersLRow from "./ManageOrdersLRow";
import OrderCancelModal from "../OrderCancelModal";

const ManageAllOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [productId, setProductId] = useState(0);
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("allOrders", () =>
    fetch(`http://localhost:5000/orders`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Price Per Piece</th>
            <th>Cancel Order</th>
            <th>Payment</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <ManageOrdersLRow
              key={order._id}
              order={order}
              index={index}
              user={user}
              setCancelOrder={setCancelOrder}
              setProductId={setProductId}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>

      {cancelOrder && (
        <OrderCancelModal
          setCancelOrder={setCancelOrder}
          refetch={refetch}
          productId={productId}
        />
      )}
    </div>
  );
};

export default ManageAllOrders;
