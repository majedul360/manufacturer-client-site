import React from "react";
import { useNavigate } from "react-router-dom";
const OrderRow = ({ order, user, index, setCancelOrder, setProductId }) => {
  const { _id, product, price, paid, transactionId } = order;
  const navigate = useNavigate();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.displayName}</td>
      <td>{user?.email}</td>
      <td>{product}</td>
      <td>${price}</td>
      <td>
        {!paid && (
          <label
            htmlFor="cancel-order"
            className="btn bg-red-500 hover:bg-red-500"
            onClick={() => setCancelOrder(true, setProductId(_id))}
          >
            Cancel Order
          </label>
        )}
      </td>
      <td>
        {paid ? (
          <span>Paid Successful</span>
        ) : (
          <button
            onClick={() => navigate(`/dashboard/payment/${_id}`)}
            className="btn"
          >
            Pay
          </button>
        )}
      </td>
      <td className="text-green-500">{transactionId}</td>
    </tr>
  );
};

export default OrderRow;
