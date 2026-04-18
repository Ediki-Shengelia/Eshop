import React, { useState } from "react";
import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {path} from '../route/path'
import { AuthContext } from "../auth/AuthContext";
const Login = () => {
  const navigate=useNavigate();
  const { login, errData } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function onChangeHandler(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  async function onSubmitHandler(e) {
    e.preventDefault();
   const user=await login(form);
    if(user){
      navigate(path.dashboard);
    }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <h1>Login</h1>{" "}
      <input
        type="email"
        name="email"
        onChange={onChangeHandler}
        value={form.email}
        id=""
      />
      <br />
      <input
        type="password"
        name="password"
        onChange={onChangeHandler}
        value={form.password}
        id=""
      />
      <br />
      <button>Login</button>
      <p style={{ color: "red" }}>{errData?.message}</p>
    </form>
  );
};

export default Login;
