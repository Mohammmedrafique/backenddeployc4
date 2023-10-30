import React, { useState } from "react";
// name ==> String
// email ==> String
// gender ==> String
// password ==> String
// age ==> Number
// city ==> String
// is_married ==> boolean
export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [is_married, setIsmarried] = useState("");
  const handleClick = () => {
    const user = { name, email, gender, password, age, city, is_married };

    fetch(`https://tame-cyan-grasshopper-hat.cyclic.app/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="gender"
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
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
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="marital status"
        value={is_married}
        onChange={(e) => {
          setIsmarried(e.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="city"
        value={city}
        onChange={(e) => {
          setCity(e.target.value);
        }}
      ></input>
      <button onClick={handleClick}>Signup</button>
    </>
  );
};
