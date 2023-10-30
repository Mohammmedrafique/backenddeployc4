import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Signup } from "../components/Signup";
import { Login } from "../components/Login";
import Posts from "../components/Posts";
import PostList from "../components/PostList";
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/posts" element={<Posts />}></Route>
      <Route path="/postlist" element={<PostList />}></Route>
    </Routes>
  );
};
