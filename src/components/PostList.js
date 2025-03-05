import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postSlice";
import { Link } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    <div className="post-list">
      {items.map((post) => (
        <div key={post.id} className="post-card">
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
          <h3>{post.title.slice(0, 20)}...</h3>
          <p>{post.body.slice(0, 50)}...</p>
          <Link to={`/item/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default PostList;
