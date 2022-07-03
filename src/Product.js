import React from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";
const Product = ({ id, title, image, price, rating }) => {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  const halfStart = (
    <img
      src="https://www.clipartkey.com/mpngs/m/202-2021568_clip-art-half-of-a-star-half-a.png"
      alt="halfStar"
    />
  );

  return (
    <div className="product">
      <div className="product_container">
        {" "}
        <div className="prodcut_imgDiv">
          <img className="prodcut_img" src={image} alt="product" />
        </div>
        <div className="product_info">
          <p>
            <small>{title}</small>
          </p>

          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <img
                  src="https://harperlibrary.typepad.com/.a/6a0105368f4fef970b01b8d23770fc970c-800wi"
                  alt="stars"
                  style={{ width: "10px", height: "10px" }}
                />
              ))}
          </div>
          <p className="product_" style={{ fontSize: "15px" }}>
            <small>$</small>
            <small>
              <strong>{price}</strong>
            </small>
          </p>
        </div>
      </div>

      <div>
        <button className="btn btn-primary" onClick={addToBasket}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Product;
