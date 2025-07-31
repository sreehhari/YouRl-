import React, { useState } from "react";
import axios from "axios";
const Input = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleSubmit = async (e) => {
    // e.preventDefault();
    // const data = await axios.post("http://localhost:3000/api/create",{url})
    // console.log(data.data);
    e.preventDefault();
    setLoading(true);
    setCopied(false);
    try {
      const response = await axios.post("http://localhost:3000/api/create", {
        url,
      });
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error creating short URL:", error);
      alert("Failed to create short URL. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleCopy = async() => {
    try{
    const textToCopy = data?.data || data?.shortUrl || data?.url || data;
      console.log("Attempting to copy:", textToCopy);
      console.log("Full data object:", data);
      if(!textToCopy){
        alert("no url to copy");
        return;
      }

      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(()=>setCopied(false),2000);
      console.log("successfully copied",textToCopy);
    }catch(e){
      console.error(e);

    }
  };
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            //   src="https://i.pinimg.com/1200x/e3/2e/a9/e32ea90b34654471e2a8a4e44c1f2bfb.jpg"
            src="https://i.pinimg.com/736x/55/02/91/550291b86ed69652433f114f658ce6ad.jpg"
            alt="randon pinterest image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">YouRl here bro</h2>
          <p>
            This is a random fact. If you're reading this you're just wasting
            time. blah blah blah. The earth is not flat. Sky is not blue. The
            sun is not a star.
          </p>
          <div className="card-actions justify-center ">
            <input
              type="text"
              placeholder="Type here"
              className="input input-ghost rounded-xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => handleSubmit(e)}
                className={`btn btn-wide ${loading ? "btn-disabled" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "Make it short"
                )}
              </button>
              {data && !loading && (
                <button
                  onClick={handleCopy}
                  className="btn btn-neutral btn-square"
                  title="copy to clipboard"
                >
                  {copied ? "✅" : "📋"}
                </button>
              )}
            </div>
            {/* {data && !loading && (
              <div className="text-sm text-gray-500 text-center">
                Short Url :{" "}
                <a href={data?.data} target="_blank" rel="noopener noreferrer">
                  {data?.data}
                </a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
