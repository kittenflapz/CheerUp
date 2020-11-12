import React, { useState } from "react";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const searchPhotos = async (e) => {
    e.preventDefault();
    let uri =
      "https://www.reddit.com/r/aww/search.json?q=" +
      query +
      "&restrict_sr=true&limit=50";
    fetch(uri)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        var imageUrls = [];
        data.data.children.forEach((post) => {
          if (
            post.data.thumbnail !== "default" &&
            post.data.thumbnail !== "self"
          ) {
            imageUrls.push(post.data);
          }
        });
        setPics(imageUrls);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {" "}
          🐱
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Try searching for your favourite cute thing!`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic}>
            <a href={pic.url}>
              <img
                className="card--image"
                alt={pic.title}
                src={pic.thumbnail}
              ></img>
            </a>
            <text>{pic.title}</text>
          </div>
        ))}
      </div>
    </>
  );
}
