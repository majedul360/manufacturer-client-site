import React from "react";
const OrderRow = ({ order, user, index, setCancelOrder, setProductId }) => {
  const { _id, product, price } = order;
  const { displayName, email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{displayName}</td>
      <td>{email}</td>
      <td>{product}</td>
      <td>{price}</td>
      <td>
        <label
          for="cancel-order"
          class="btn bg-red-500 hover:bg-red-500"
          onClick={() => setCancelOrder(true, setProductId(_id))}
        >
          Cancel Order
        </label>
      </td>
      <td>
        <button className="btn">Pay</button>
      </td>
    </tr>
  );
};

export default OrderRow;
