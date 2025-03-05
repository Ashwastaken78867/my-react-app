import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetail = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.items.find((post) => post.id === Number(id))
  );

  if (!post) return <p>Post not found!</p>;

  return (
    <div className="post-detail">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>User ID:</strong> {post.userId}</p>
    </div>
  );
};

export default PostDetail;
