import React from "react";
import aboutimage from "../assests/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-image">
        <img src={aboutimage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nobis
          doloremque omnis cumque velit quidem animi, eum, similique veniam
          natus, cum vitae? Dicta, laboriosam eos.
        </p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
