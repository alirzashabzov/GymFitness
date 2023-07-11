import React from "react";
import FeatureBoxs from "./FeatureBoxs";
import fimage1 from "../assests/1.svg.png";
import fimage2 from "../assests/2.svg.png";
import fimage3 from "../assests/3.svg.png";
import fimage4 from "../assests/4.svg.png";

function Feature() {
  return (
    <div id="features">
      <h1>FEATURES</h1>
      <div className="a-container">
        <FeatureBoxs image={fimage1} title="WeightLifting" />
        <FeatureBoxs image={fimage2} title="Specififc Muscle" />
        <FeatureBoxs image={fimage3} title="Flex Your Mucle " />
        <FeatureBoxs image={fimage4} title="Cardio Exercise" />
      </div>
    </div>
  );
}

export default Feature;
