import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckOutForm from "../components/checkoutForm/CheckoutForm";

const Payment = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery(["order", id], () =>
    fetch(
      `https://menufacturer-server-side-h26rnk2hy-majedul360.vercel.app/order/${id}`,
      {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    ).then((res) => res.json())
  );
  return (
    <>
      <div className="card max-w-[40rem] bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Hellow {data?.name}</h3>
          <h4 className="text-xl">Please pay for {data?.product}</h4>
          <h5 className="text-lg">Price: ${data?.price} per piece</h5>
          <h6 className="text-xl">You ordered {data?.quantity} pieces</h6>
          <h6 className="card-title">
            Total Price: ${parseInt(data?.price) * parseInt(data?.quantity)}
          </h6>
        </div>
      </div>
      <div className="card max-w-[40rem] bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <CheckOutForm data={data} />
        </div>
      </div>
    </>
  );
};

export default Payment;
