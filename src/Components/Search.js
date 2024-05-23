import React from "react";
import { useGlobalContext } from "../Context/AuthContext";

const Search = () => {
  const { query, searchPost } = useGlobalContext();

  return (
    <>
      <div className="search-container mt-4">
          <h1 style={{ fontFamily: 'Cursive' }} className="text-light text-center">TechTrends News!</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="search-input-container">
              <input
                className="search-input"
                type="text"
                placeholder="Search here"
                value={query}
                onChange={(e) => searchPost(e.target.value)}
              />
            </div>
          </form>
        </div>
    </>
  );
};

export default Search;
