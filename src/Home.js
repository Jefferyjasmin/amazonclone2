import React, { useState } from "react";
import "./Home.css";
import Product from "./Product";
// import Product from "./Product";

const Home = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "candles light night",
      price: 2,
      rating: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgz8tY21onsx5RbCkzRk6Nn35eNjT7T55qVGvsI_xNGQH4tbZenRinCQ5Os0ImAe0yKBVWYU&usqp=CAc",
    },
    {
      id: 2,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://cdn.shopify.com/s/files/1/0345/0257/4125/articles/NCW_HOME-TIN_345x345@2x.jpg?v=1621948190",
    },
    {
      id: 3,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://www.sephora.com/productimages/sku/s1947118-main-zoom.jpg?imwidth=315",
    },
    {
      id: 4,
      title: "candles light night",
      price: 11.5,
      rating: 5,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-candles-1611844114.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    },
  ]);
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NTYxZWIwNDMt/NTYxZWIwNDMt-MTlmNGE1MTAt-w1500._CB668766241_.jpg"
        alt="home"
      />
      <div className="container">
        <div className="row row-cols-3">
          <div className="col-sm-12">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      <div className="home container-fluid">
        <div className="row">
          <div
            className="col-9"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Product
              id="1"
              title="candles light night"
              price={11.5}
              rating={5}
              image="https://cdn.shopify.com/s/files/1/0345/0257/4125/articles/NCW_HOME-TIN_345x345@2x.jpg?v=1621948190"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
