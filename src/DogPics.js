import React, { useState, useEffect } from "react";

// WARNING: this useEffect will run in an infinite loop!
// to fix, pass an empty array as the second argument for useEffect
function DogPics() {
  const [images, setImages] = useState([]);

  useEffect(async () => {
    console.log("useEffect");
    await fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setImages(data.message);
      });
  }, []);

  console.log("render");

  return (
    <div>
      {images.map((image) => (
        <img width="400px" height="400px" src={image} key={image} />
      ))}
    </div>
  );
}

export default DogPics;
