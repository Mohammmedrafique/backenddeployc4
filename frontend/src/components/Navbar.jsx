import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="/">Home</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/postlist">Posts</Link>
    </div>
  );
};
