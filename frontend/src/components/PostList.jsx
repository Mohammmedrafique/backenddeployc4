import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      fetch("https://tame-cyan-grasshopper-hat.cyclic.app/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, []); // The empty dependency array ensures that this effect runs only once on component mount

  return (
    <div>
      <h2>All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>Device: {post.device}</p>
            <p>No. of Comments: {post.no_of_comments}</p>
            <p>User: {post.user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
