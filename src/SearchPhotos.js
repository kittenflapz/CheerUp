import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchPhotos = async (e) => {
    setLoading(true);
    e.preventDefault();
    const uri = `https://www.reddit.com/r/aww/search.json?q=${query}&restrict_sr=true&limit=50`;
    const response = await fetch(uri);
    const data = await response.json();

    const postData = data.data.children
      .filter(
        (post) =>
          post.data.thumbnail !== "default" && post.data.thumbnail !== "self"
      )
      .map((post) => post.data);

    console.log(postData);
    setLoading(false);
    setPics(postData);
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
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

      {
        //{!loading && pics.length === 0 && "no pics found"}
      }
      {loading && <ClipLoader />}

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <a href={pic.url} rel="noopener noreferrer" target="_blank">
              <img
                className="card--image"
                alt={pic.title}
                src={pic.thumbnail}
              />
            </a>
            <div>{pic.title}</div>
          </div>
        ))}
      </div>
    </>
  );
}
