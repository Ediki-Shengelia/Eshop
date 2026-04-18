import React, { useEffect, useState } from "react";
import { postApi } from "../api/PostApi";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { usePostHook } from "../hooks/usePostHook";
import { path } from "../route/path";
const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { removePost } = usePostHook();
  const [onePost, setOnePost] = useState(null);
  const [error, setError] = useState(null); // 👈 add error state

  async function showOnePost(id) {
    try {
      const res = await postApi.onePost(id);
      setOnePost(res.data.data);
    } catch (err) {
      setError(err.response?.data); // 👈 fixed: was setErrorP
    }
  }

  useEffect(() => {
    showOnePost(id); // 👈 fixed: pass id here
  }, [id]);

  return (
    <div>
      {onePost ? (
        <>
          <p>ID: {onePost.id}</p>
          <button
            onClick={() => {
              removePost(onePost.id);
              navigate(path.dashboard);
            }}
          >
            Delete{" "}
          </button>
          <h2>{onePost.type}</h2>
          <p>{onePost.title}</p>
          <p>{onePost.old_price ? onePost.old_price : null}</p>

          <p>{onePost.price}</p>
          <p>Location: {onePost.location}</p>
          <h2>{onePost.phone_number ? onePost.phone_number : null}</h2>
          <div>
            {onePost.post_photo ? (
              <img style={{ width: "400px" }} src={onePost.post_photo} />
            ) : null}
          </div>
          <p>{onePost.description ? onePost.description : null}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Post;
