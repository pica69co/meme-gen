import React from "react";
import image from "../assets/images/nivo/fry.png";

const Help = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        justifyItems: "center",
        margin: "auto",
      }}
    >
      <p style={{ color: "#1a1a1a", fontWeight: "500", fontSize: "1.2rem" }}>
        Step 1: Choose a meme. <br />
        Step 2: Enter the text you want.
        <br />
        Step 3: Create meme. <br />
        Step 4: Download meme project.
        <br />
      </p>
      <div
        style={{
          marginLeft: "35px",
        }}
      >
        <img src={image} alt="fry" height={280} width={280} />
      </div>
    </div>
  );
};

export default Help;
