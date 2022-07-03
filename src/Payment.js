import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotoal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { db } from "./firebase";
import axios from "./axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(null);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const respose = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotoal(basket) * 100}`,
      });
      setClientSecret(respose.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log("this is the Client Secret =>>>>>>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        console.log("pahmentIntent =>>>>>>>", paymentIntent);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  console.log(
    "succeded =>>>>>>" + succeeded,
    "disabled =>>>>>>>" + disabled,

    "processing >>>>>> " + processing
  );
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length}</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address :</h3>
          </div>
          <div className="payment_address">
            <p>
              <b>{user?.email.toUpperCase()}</b>
            </p>
            <p>
              <b>1335 Ocean ave</b>
            </p>
            <p>
              <b>Brooklyn , NY</b>
            </p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            stripe magic
            <form onsubmit={(e) => e.preventDefault()}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        Order Total: <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotoal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  onClick={handleSubmit}
                  disabled={disabled || succeeded || processing}
                >
                  <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
