import React from "react";
import "./products.scss";
import axios from "../../api";
import Loading from "../loading/Loading";

const Products = ({ data, isAdmin, setReload, loading }) => {
  const handleDelete = (id) => {
    if (confirm("O'chirishni xoxlaysizmi")) {
      axios
        .delete(`products/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((res) => console.log(res));
    }
  };

  let productItem = data?.map((product) => (
    <div className="products__card" key={product.id}>
      <div className="products__img">
        <img src={product.img} alt="" />
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <p>{product.createdAt}</p>
      <p>{product.desc}</p>
      {isAdmin ? (
        <>
          <button className="btn__edit">Edit</button>
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
    <div>
      <h2>Products</h2>

      <div className="products">{loading ? <Loading /> : productItem}</div>
    </div>
  );
};

export default Products;
