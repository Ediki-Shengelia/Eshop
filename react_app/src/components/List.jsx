import React, { useState } from "react";
import Post from "./Post";
import { useNavigate } from "react-router-dom";
import { path } from "../route/path";
const List = ({ posts, removePost }) => {
  const navigate=useNavigate();
  return (
    <div>
      {posts.map((el) => (
        <p
          key={el.id}
          style={{
            backgroundColor: "red",
            color: "white",
            margin: "7px",
            padding: "10px",
          }}
        >
          <p>{el.title}</p>
          <p>{el.price}</p>
          <p>Location:{el.location ? el.location : null}</p>
          <button onClick={() => removePost(el.id)}>Delete</button>
          <button onClick={()=>navigate(path.postId.replace(":id",el.id))}>Show more</button>
        </p>
      ))}
    </div>
  );
};

export default List;
