import React from "react";
import "./EditUserModule.scss";
import axios from "../../api";

const EditUserModule = ({ setData, data, setReload }) => {
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    let updateData = {
      fullName: data.fullName,
      age: data.age,
      username: data.username,
    };
    axios
      .put(`users/${data.id}`, updateData)
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
        className="edit-user-model"
        action=""
      >
        <h2>EditUserModule</h2>
        <input
          required
          value={data.fullName}
          onChange={(e) =>
            setData((prev) => ({ ...prev, fullName: e.target.value }))
          }
          type="text"
        />
        <input
          required
          value={data.age}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
          type="text"
        />
        <input
          required
          value={data.username}
          onChange={(e) =>
            setData((prev) => ({ ...prev, username: e.target.value }))
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

export default EditUserModule;
