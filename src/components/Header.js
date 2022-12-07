import React from "react";
import blogData from "../data/blog";

function Header({ name }) {
  console.log(blogData.name);
  return (
    <header>
      <h1 name={name}>{name} </h1>
    </header>
  );
}

export default Header;
