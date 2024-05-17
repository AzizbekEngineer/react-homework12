import React from "react";
import axios from "../../api";
import "../products/products.scss";
import Loading from "../loading/Loading";

const Users = ({ data, isAdmin, setReload, loading }) => {
  const handleDelete = (id) => {
    if (confirm("O'chirishni xoxlaysizmi")) {
      axios
        .delete(`users/${id}`)
        .then((res) => {
          setReload((p) => !p);
          console.log(res);
        })
        .catch((res) => console.log(res));
    }
  };

  let userItem = data?.map((user) => (
    <div className="products__card" key={user.id}>
      <div className="products__img">
        <img src={user.img} alt="" />
      </div>
      <h3>{user.fullName}</h3>
      <p>{user.birthDay}</p>
      <p>{user.age}</p>
      <p>{user.username}</p>
      {isAdmin ? (
        <>
          <button className="btn__edit">Edit</button>
          <button onClick={() => handleDelete(user.id)} className="btn__delete">
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
      <h2>Users</h2>
      <div className="users products">{loading ? <Loading /> : userItem}</div>
    </div>
  );
};

export default Users;
