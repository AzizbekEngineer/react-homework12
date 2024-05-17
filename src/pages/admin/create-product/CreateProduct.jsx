import React, { useState, useRef } from "react";
import "./createProduct.scss";
import axios from "../../../api";
import { toast } from "react-toastify";
import "./createProduct.scss";

// let initialState = {
//   name: "",
//   price: "",
//   desc: "",
// };

const CreateProduct = () => {
  // const [newProduct, setNewProduct] = useState(initialState);
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    // console.log(newProduct);

    let productRef = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      desc: descRef.current.value,
    };

    axios
      .post("/products", productRef)
      .then((res) => {
        nameRef.current.value = "";
        priceRef.current.value = "";
        descRef.current.value = "";
        toast.success("Qo'shildi");
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="form">
      <h2 className="form__title">CreateProduct</h2>
      <form className="form__info" onSubmit={handleCreate} action="">
        <div className="form__card">
          <label htmlFor="name">Product Name:</label>
          <input
            required
            id="name"
            ref={nameRef}
            type="text"
            placeholder="Nomi"
          />
        </div>
        <div className="form__card">
          <label htmlFor="price">Product Narxi:</label>
          <input
            required
            id="price"
            ref={priceRef}
            type="number"
            placeholder="Narxi"
          />
        </div>
        <div className="form__card">
          <label htmlFor="desc">Product Desc:</label>
          <input
            required
            id="desc"
            ref={descRef}
            type="text"
            placeholder="Description"
          />
        </div>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
