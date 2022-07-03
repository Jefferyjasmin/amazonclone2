import { Button, TextField, TextareaAutosize } from "@material-ui/core";
import React, { useState } from "react";
import "./AddProducts.css";
const AddProducts = () => {
  const [id, setID] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
      description: description,
    };
    console.log(newProduct);
  };
  return (
    <div className="addProduct">
      <h3>Add New Product</h3>
      <div className="addProductContainer">
        <form
          submit={(e) => e.preventDefault()}
          className="addProductContainer"
        >
          <TextField
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <TextareaAutosize
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="addProduct_textarea"
            aria-label="empty textarea"
            placeholder="Description"
          />

          <input
            type="file"
            placeholder="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Button variant="contained" color="primary" onClick={onSubmit}>
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
