import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  useEffect(() => {
    if (data) {
      fetch("https://wood-store.herokuapp.com/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result?.clientSecret) {
            setClientSecret(result?.clientSecret);
          }
        });
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");

    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: data?.name,
            email: data?.email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
    } else {
      setCardError("");
      setSuccess("Congrats! your payment is compeleted.");
      setTransactionId(paymentIntent.id);

      //create payment info
      const payment = {
        transactionId: paymentIntent.id,
      };
      fetch(`https://wood-store.herokuapp.com/order/${data?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((e) => console.log(e));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <p>
          <span className="text-green-500 mr-1">{success}</span>

          <span className="text-orange-500">
            your transaction id: {transactionId}
          </span>
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
