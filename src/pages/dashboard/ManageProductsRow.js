import React from "react";

const ManageProductsRow = ({
  product,
  index,
  setIsDeleteProduct,
  setProductId,
}) => {
  const { _id, name, price } = product;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>${price} per piece</td>
      <td>
        <label
          htmlFor="delete-product-modal"
          className="btn bg-red-500 hover:bg-red-500"
          onClick={() => setIsDeleteProduct(true, setProductId(_id))}
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageProductsRow;
