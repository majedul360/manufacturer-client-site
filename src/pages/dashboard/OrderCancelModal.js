import React from "react";

const OrderCancelModal = ({ refetch, productId, setCancelOrder }) => {
  const cancelOrder = () => {
    fetch(`http://localhost:5000/cancelOrder/${productId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCancelOrder(false);
        refetch();
      });
  };
  return (
    <div>
      <input type="checkbox" id="cancel-order" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <p class="py-4 capitalize">
            are you sure? do you want to cancel the order?
          </p>
          <div class="modal-action">
            <label
              class="btn bg-red-500 hover:bg-red-500 mr-2"
              onClick={cancelOrder}
            >
              yes
            </label>
            <label for="cancel-order" class="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCancelModal;
