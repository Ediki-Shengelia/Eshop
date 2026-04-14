import React from 'react'

const Register = () => {
    const [user,set]
    function onChange(e){
        const {name,value}=e.target;

    }
  return (
    <form>
      <input type="text" name="name" required id="" />
      <br />
      <input type="email" name="email" required id="" />
      <br />
      <input type="password" name="password" required id="" />
      <br />
      <input type="password" name="confirm" required id="" />
      <br />
      <button>Register</button>
    </form>
  )
}

export default Register
