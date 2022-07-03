import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ image, price, rating, title, id, hideButton }) => {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt={title} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          $<strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://harperlibrary.typepad.com/.a/6a0105368f4fef970b01b8d23770fc970c-800wi"
                alt="stars"
                style={{ width: "20px", height: "20px" }}
              />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}> Remove from basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckoutProduct;
