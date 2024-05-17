import React, { useState } from "react";
import "../create-product/createProduct.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  name: "",
  price: "",
  desc: "",
};

const CreateUser = () => {
  const [newUser, setNewUser] = useState(initialState);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(newUser);

    axios
      .post("/users", newUser)
      .then((res) => {
        setNewUser(initialState);
        toast.success("Qo'shildi");
        console.log(res);
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="form">
      <h2 className="form__title">Create Users</h2>
      <form className="form__info" onSubmit={handleCreate} action="">
        <div className="form__card">
          <label htmlFor="fullName">User Name:</label>
          <input
            id="fullName"
            value={newUser.fullName}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, fullName: e.target.value }))
            }
            type="text"
            placeholder="fullName"
          />
        </div>
        <div className="form__card">
          <label htmlFor="age">User age:</label>
          <input
            id="age"
            value={newUser.age}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, age: +e.target.value }))
            }
            type="number"
            placeholder="Age"
          />
        </div>
        <div className="form__card">
          <label htmlFor="birthDay">User Birthday:</label>
          <input
            id="birthDay"
            value={newUser.birthDay}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, birthDay: e.target.value }))
            }
            type="date"
            placeholder="birthDay"
          />
        </div>
        <div className="form__card">
          <label htmlFor="username">User username:</label>
          <input
            id="username"
            value={newUser.username}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, username: e.target.value }))
            }
            type="text"
            placeholder="UserName"
          />
        </div>
        <button className="form__btn">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;
