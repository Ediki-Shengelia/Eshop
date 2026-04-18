import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { path } from "../route/path";
const Register = () => {
    const navigate=useNavigate();
  const { register ,errData} = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_pass: "",
  });
  const [validatinForm, setValiidationForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_pass: "",
  });
  function validation(value) {
    const errors = { name: "", email: "", password: "", confirm_pass: "" };
    if(!value.name||value.name.length<6){
      errors.name="Name must be more than 5 characters";

    }
     else if(!value.email||!value.email.includes("@gmail.com")){
      errors.email="Gmail is required";
    }else if(value.email.split("@")[0].length<6){
      errors.email="Before gmail must be more than 6 characters";
    }
   else  if(!value.password||value.password.length<6){
      errors.password="Password must be more than 6 characters";
    }
    
    else if(value.confirm_pass!=value.password){
      errors.confirm_pass="Confirm password and confirm password must be the same";
    }
    return errors;

  }
  function onChangeFunc(e) {
    const { name, value } = e.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    const Err=validation(nextForm);
    setValiidationForm(Err);
  
    
  }
 async  function submitHandler(e){
    e.preventDefault();
    const user=await register({name:form.name,email:form.email,password:form.password});
    if(user){
      navigate(path.dashboard);
    }
    
  }
  return (
    <form onSubmit={submitHandler}>
      <h1>Register</h1>
      <input type="text" name="name" required id=""  onChange={onChangeFunc}/>
      <p>{validatinForm.name}</p>
            <p style={{color:"red"}}>{errData?.errors?.name?.[0]}</p>

      <br />
      <input type="email" name="email" required id=""  onChange={onChangeFunc}/>
      <p>{validatinForm.email}</p>
            <p style={{color:"red"}}>{errData?.errors?.email?.[0]}</p>

      <br />
      <input type="password" name="password" required id=""  onChange={onChangeFunc}/>
      <p>{validatinForm.password}</p>
            <p style={{color:"red"}}>{errData?.errors?.password?.[0]}</p>

      <br />
      <input type="password" name="confirm_pass" required id="" onChange={onChangeFunc} />
      <p>{validatinForm.confirm_pass}</p>
      <br />
      <button>Register</button>
    </form>
  );
};

export default Register;
