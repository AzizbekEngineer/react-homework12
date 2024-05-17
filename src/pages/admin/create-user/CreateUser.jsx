import React, { useState, useRef } from "react";
import "../create-product/createProduct.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

// let initialState = {
//   name: "",
//   price: "",
//   desc: "",
// };

const CreateUser = () => {
  // const [newUser, setNewUser] = useState(initialState);
  const fullNameRef = useRef();
  const ageRef = useRef();
  const birthDayRef = useRef();
  const usernameRef = useRef();

  const handleCreate = (e) => {
    e.preventDefault();
    // console.log(newUser);

    let usersRef = {
      fullName: fullNameRef.current.value,
      age: ageRef.current.value,
      birthDay: birthDayRef.current.value,
      username: usernameRef.current.value,
    };
    axios
      .post("/users", usersRef)
      .then((res) => {
        fullNameRef.current.value = "";
        ageRef.current.value = "";
        birthDayRef.current.value = "";
        usernameRef.current.value = "";
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
            required
            id="fullName"
            ref={fullNameRef}
            type="text"
            placeholder="fullName"
          />
        </div>
        <div className="form__card">
          <label htmlFor="age">User age:</label>
          <input
            required
            id="age"
            ref={ageRef}
            type="number"
            placeholder="Age"
          />
        </div>
        <div className="form__card">
          <label htmlFor="birthDay">User Birthday:</label>
          <input
            required
            id="birthDay"
            ref={birthDayRef}
            type="date"
            placeholder="birthDay"
          />
        </div>
        <div className="form__card">
          <label htmlFor="username">User username:</label>
          <input
            required
            id="username"
            ref={usernameRef}
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
