import React from "react";

const ProductDeleteModal = ({ refetch, productId, setIsDeleteProduct }) => {
  const deleteProduct = () => {
    fetch(`https://wood-store.herokuapp.com/product/${productId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsDeleteProduct(false);
        refetch();
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-product-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <p className="py-4 capitalize">
            are you sure? do you want to cancel the order?
          </p>
          <div className="modal-action">
            <label
              className="btn bg-red-500 hover:bg-red-500 mr-2"
              onClick={deleteProduct}
            >
              yes
            </label>
            <label htmlFor="delete-product-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDeleteModal;
