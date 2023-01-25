import React, { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const submitUrl = (fullUrl) => {
    fetch("http://localhost:5000/shortenUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullUrl }),
    })
      .then((res) => res.json())
      .then((data) => {
        setShortUrl(data.shortUrl);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">Url Shortener</h1>
      <br />
      <input
        type="text"
        value={url}
        className=" border-2 rounded w-1/2 p-2"
        placeholder="Enter full Url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <br />
      <button
        className="border-2 rounded p-2 w-20"
        onClick={() => submitUrl(url)}
      >
        Submit
      </button>
      <br />
      {shortUrl != "" && <a href={shortUrl}>{shortUrl}</a>}
    </div>
  );
}

export default App;
