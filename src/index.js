import React from "react";
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

const fName = "Sambhu";
const mName = "jyoti";
const lName = "Das";
const currentYear = new Date().getFullYear();
const rImage = "https://picsum.photos/200";
let goodX = "";
let fColor = "";
const currentHour = new Date().getHours();

if (currentHour <= 12) {
  goodX = "Good morning!";
  fColor = "blue";
} else if (currentHour > 12 && currentHour <= 18) {
  goodX = "Good afternoon!";
  fColor = "orange";
} else {
  goodX = "Good evening!";
  fColor = "black";
}

root.render(
  <div>
    <h1 className="heading">
      Hello {fName}
      {mName} {lName}!
    </h1>
    <h1 style={{ color: fColor }}>{goodX}</h1>
    <p>This is a paragraph</p>
    <div>
      <img
        className="food-images"
        src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
        alt="Pasta."
      />
      <img
        className="food-images"
        src="https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Chicken in red sauce."
      />
    </div>
    <div>
      <img src={rImage} alt="Random images" />
    </div>
    <p style={{ color: "blue" }}>Copyright @ {currentYear}</p>
  </div>
);
