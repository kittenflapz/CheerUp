import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function SearchPhotos() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstSearchDone, setFirstSearch] = useState(false);
  const [err, setError] = useState(false);
  const searchPhotos = async (e) => {
    setLoading(true);
    setFirstSearch(true);
    e.preventDefault();
    try {
      const uri = `https://www.reddit.com/r/aww/search.json?q=${query}&restrict_sr=true&limit=50`;

      const response = await fetch(uri);
      const data = await response.json();

      const postData = await data.data.children
        .filter(
          (post) =>
            post.data.thumbnail !== "default" && post.data.thumbnail !== "self"
        )
        .map((post) => post.data);

      setLoading(false);
      setPics(postData);
    } catch (error) {
      setError(true);
      console.error(error);
    }
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

      {firstSearchDone &&
        !loading &&
        pics.length === 0 &&
        "No pictures found! Don't worry, there are lots of other cute things. Try 'ferret' or 'meow'."}

      {!err && loading && <ClipLoader />}

      {err && "Something went wrong. Try again later!"}

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
            {pic.title}
          </div>
        ))}
      </div>
    </>
  );
}
