import React, { useState } from "react";
import axios from "axios";
const Input = () => {
  const [url, setUrl] = useState("");
  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/api/create",{url})
    console.log(data.data);
  }
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
    <img
    //   src="https://i.pinimg.com/1200x/e3/2e/a9/e32ea90b34654471e2a8a4e44c1f2bfb.jpg"
        src="https://i.pinimg.com/736x/55/02/91/550291b86ed69652433f114f658ce6ad.jpg"
      alt="randon pinterest image" />
  </figure>
        <div className="card-body">
          <h2 className="card-title">YouRl here bro</h2>
          <p>
           This is a random fact. If you're reading this you're just wasting time. blah blah blah. The earth is not flat. Sky is not blue. The sun is not a star. 
          </p>
          <div className="card-actions justify-center">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={(e)=>handleSubmit(e)} className="btn btn-wide">Make it short</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
