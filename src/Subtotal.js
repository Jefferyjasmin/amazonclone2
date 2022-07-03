import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotoal } from "./reducer";
import { useHistory } from "react-router";

const Subtotal = () => {
  const history = useHistory();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <div className="subtotal_CurrencyFormat">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                subtotal {basket.length}(items):
                <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" /> this order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotoal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button
          className="subtotal_button"
          onClick={(e) => history.push("/payment")}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Subtotal;
