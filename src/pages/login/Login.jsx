import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./login.scss";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    let user = { username, password };
    setLoading(true);

    axios
      .post("https://dummyjson.com/auth/login", user)
      .then((res) => {
        console.log(res.data);
        toast.success("welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/admin/manageProduct");
      })
      .catch((err) => {
        console.log(err);
        toast.error("username or password is incorrect");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login">
      <div className="container">
        <h2 className="login__title">Login</h2>

        <form onSubmit={handleLogin} action="" className="login__form">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name=""
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
          />
          <div className="login__btns">
            <button disabled={loading}>
              {loading ? "Loading..." : "Log in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default memo(Login);
