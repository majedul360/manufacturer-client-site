import React, { useState } from "react";
import { useQuery } from "react-query";
import ManageProductsRow from "./ManageProductsRow";
import ProductDeleteModal from "./ProductDeleteModal";
const ManageProducts = () => {
  const [isDeleteProduct, setIsDeleteProduct] = useState(false);
  const [productId, setProductId] = useState(0);
  const {
    isLoading,
    error,
    data: products,
    refetch,
  } = useQuery("products", () =>
    fetch(`http://localhost:5000/products`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price Per Piece</th>
            <th>Delete Products</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <ManageProductsRow
              key={product._id}
              product={product}
              index={index}
              setIsDeleteProduct={setIsDeleteProduct}
              setProductId={setProductId}
            />
          ))}
        </tbody>
      </table>

      {isDeleteProduct && (
        <ProductDeleteModal
          setIsDeleteProduct={setIsDeleteProduct}
          refetch={refetch}
          productId={productId}
        />
      )}
    </div>
  );
};

export default ManageProducts;
