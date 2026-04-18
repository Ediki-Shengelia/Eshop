import React, { useState } from "react";
import { usePostHook } from "../hooks/usePostHook";
import List from "../components/List";
import Form from "../components/Form";
const Dashboard = () => {
  const [postId, setPostId] = useState(null);
  const { posts, loading, errorP, loadPosts, createPost, removePost } =
    usePostHook();

  if (loading) return <p>Loading ...</p>;
  return (
    <div>
      <Form createPost={createPost} />
      <List posts={posts} removePost={removePost} />
    </div>
  );
};

export default Dashboard;
