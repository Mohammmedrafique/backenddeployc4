import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleClick = () => {
    const user = { email, password };
    console.log(user);
    fetch(`https://tame-cyan-grasshopper-hat.cyclic.app/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>

      <button onClick={handleClick}>Login</button>
    </>
  );
};
//djdk