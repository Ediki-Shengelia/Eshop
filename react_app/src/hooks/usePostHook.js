import { useEffect, useState } from "react";
import { postApi } from "../api/PostApi";

export function usePostHook() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorP, setErrorP] = useState("");

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await postApi.list();
      setPosts(res.data.data);
    } catch (error) {
      setErrorP(error.response?.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPosts();
  }, []);
  async function createPost(payload) {
    setLoading(true);
    try {
      await postApi.create(payload);
      await loadPosts();
    } catch (error) {
      setErrorP(error.response?.data);
    } finally {
      setLoading(false);
    }
  }
  async function removePost(PostId) {
    setLoading(true);
    try {
      await postApi.remove(PostId);
      await loadPosts();
    } catch (error) {
      setErrorP(error.response?.data);
    } finally {
      setLoading(false);
    }
  }

  return {
    posts,
    loading,
    errorP,
    loadPosts,
    createPost,
    removePost,
  };
}
