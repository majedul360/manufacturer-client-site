import React, { useState } from "react";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";
import auth from "../../firebase/Firebase.int";
import { useAuthState } from "react-firebase-hooks/auth";
import OrderCancelModal from "./OrderCancelModal";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [productId, setProductId] = useState(0);
  const {
    isLoading,
    error,
    data: orders,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://wood-store.herokuapp.com/orders/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Cancel Order</th>
            <th>Payment</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order, index) => (
            <OrderRow
              key={order._id}
              order={order}
              index={index}
              user={user}
              setCancelOrder={setCancelOrder}
              setProductId={setProductId}
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

export default MyOrders;
