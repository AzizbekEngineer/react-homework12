import React from "react";
import "./editProductModel.scss";
import axios from "../../api";

const EditProductModel = ({ setData, data, setReload }) => {
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let updateData = {
      name: data.name,
      price: data.price,
    };
    axios
      .put(`products/${data.id}`, updateData)
      .then((res) => {
        setData(null);
        setReload((p) => !p);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div onClick={() => setData(null)} className="overlay"></div>
      <form
        onSubmit={handleUpdateProduct}
        className="edit-product-model"
        action=""
      >
        <h2>EditProductModel</h2>
        <input
          value={data.name}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
        />
        <input
          value={data.price}
          onChange={(e) =>
            setData((prev) => ({ ...prev, price: e.target.value }))
          }
          type="text"
        />
        <button
          className="editClose"
          type="button"
          onClick={() => setData(null)}
        >
          Close
        </button>
        <button className="editSave">Save</button>
      </form>
    </>
  );
};

export default EditProductModel;
