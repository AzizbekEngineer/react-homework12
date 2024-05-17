import React, { useState } from "react";
import "./products.scss";
import axios from "../../api";
import EditProductModel from "../edit-product-model/EditProductModel";
import Loading from "../loading/Loading";

const Products = ({ data, isAdmin, setReload, loading }) => {
  const [editProduct, setEditProduct] = useState(null);

  const handleDelete = (id) => {
    if (confirm("O'chirishni xoxlesanmi")) {
      axios
        .delete(`products/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((res) => console.log(res));
    }
  };

  // const handleEdit = (product) => {
  //   setEditProduct(product);
  // };

  let productItem = data?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__img">
        <img src={product.img} alt="" />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.createdAt}</p>
      {isAdmin ? (
        <>
          <button onClick={() => setEditProduct(product)} className="btn__edit">
            Edit
          </button>
          <button
            onClick={() => handleDelete(product.id)}
            className="btn__delete"
          >
            Delete
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  ));
  return (
    <>
      <div>
        <h2>Products</h2>
        <div className="products">{loading ? <Loading /> : productItem}</div>
      </div>
      {editProduct ? (
        <EditProductModel
          data={editProduct}
          setData={setEditProduct}
          setReload={setReload}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Products;
