import React, { useState } from "react";

const Form = ({ createPost }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    phone_number: "",
    price: "",
    old_price: "",
    location: "",
    type: "",
    post_photo: null,
  });
  function onChangeHandler(e) {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  }
  async function onSubmitHandler(e) {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        payload.append(key, value);
      }
    });
    await createPost(payload);
    console.log(form);
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="title"
        required
        id=""
        placeholder="Title"
        onChange={onChangeHandler}
      />
      <br />
      <input
        type="file"
        name="post_photo"
        required
        id=""
        onChange={onChangeHandler}
      />
      <br />
      <textarea
        name="description"
        placeholder="Description"
        id=""
        onChange={onChangeHandler}
      ></textarea>
      <br />
      <select onChange={onChangeHandler} name="type" id="">
        <option value="">Select an option</option>
        <option value="Phone">Phone</option>
        <option value="Laptop">Laptop</option>
        <option value="Tabs">Tabs</option>
        <option value="Smart Watch">Smart Watch</option>
        <option value="Photo/Video">Photo/Video</option>
      </select>
      <br />
      <input
        type="tel"
        name="phone_number"
        id=""
        placeholder="Phone Number"
        onChange={onChangeHandler}
      />
      <br />
      <input
        type="number"
        name="price"
        onChange={onChangeHandler}
        required
        id=""
        placeholder="price"
      />
      <br />
      <input
        type="number"
        name="old_price"
        placeholder="Old Price"
        id=""
        onChange={onChangeHandler}
      />
      <br />
      <input
        type="text"
        name="location"
        placeholder="location"
        id=""
        onChange={onChangeHandler}
      />
      <br />
      <button>Create Form</button>
    </form>
  );
};

export default Form;
