import React from "react";
import blogData from "../data/blog";

function About({ image, about }) {
  // const image = "https://via.placeholder.com/215"; //default value if there is no image
  const alt = "blog logo";
  return (
    <aside>
      <img src={image} alt={alt} />
      <p about={about}>{about}</p>
    </aside>
  );
}

export default About;
