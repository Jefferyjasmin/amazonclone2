import React from "react";
import moment from "moment";
import "./Order.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBasketTotoal } from "./reducer";
export const Order = ({ order }) => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2>________________________________________________________________</h2>
      <p>{moment.unix(order.data.created).format("MMMMM Do YYYY, h:mma")}</p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order_total">Order Total : {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};
