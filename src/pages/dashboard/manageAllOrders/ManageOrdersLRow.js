import React from "react";

const ManageOrdersLRow = ({
  order,
  user,
  index,
  setCancelOrder,
  setProductId,
  refetch,
}) => {
  const { _id, name, email, product, price, paid, status } = order;

  const changeStatus = (id) => {
    fetch(
      `https://menufacturer-server-side-h26rnk2hy-majedul360.vercel.app/changeStatus/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({}),
      }
    )
      .then((res) => res.json())
      .then((result) => refetch());
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
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
      <td className="text-xl">
        {paid ? (
          !status ? (
            <span>Pending</span>
          ) : (
            <span>shipped</span>
          )
        ) : (
          <span>Unpaid</span>
        )}
      </td>
      <td>
        {paid && (
          <button className="btn btn-sm" onClick={() => changeStatus(_id)}>
            Status
          </button>
        )}
      </td>
    </tr>
  );
};

export default ManageOrdersLRow;
