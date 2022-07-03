import React from "react";

import "./CheckOut.css";
import CheckoutProduct from "./CheckoutProduct";

import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <img
            className="checkout__ad"
            alt="Checkout"
            //   src="https://media.istockphoto.com/photos/melting-candle-on-cool-blue-background-picture-id1016998564?k=6&m=1016998564&s=612x612&w=0&h=B4-pIf9cdFd1MuZMdDx2sG6pnuqdFParWivbtzEWOZg="
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <h4>{user ? "Hello " + user.email.toUpperCase() : ""} </h4>
        </div>

        {basket?.length === 0 ? (
          <div className="checkout_withSubtotalAmountNone">
            {" "}
            <h2> Your Shopping Basket is empty</h2>
            <p>
              You have no ites in your basket. To buy an item please click on
              "Add to baset" Underneath the item.
            </p>
          </div>
        ) : (
          <div
            className="checkout_withSubtotalAmount"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div>
              <h3 className="checkout_title"> Your Shopping Basket</h3>
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

            {basket.length > 0 && (
              <div className="checkout_right">
                <Subtotal />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
