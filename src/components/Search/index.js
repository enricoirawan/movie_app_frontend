import React from "react";

function Search() {
  return (
    <div className="form-inline mx-auto">
      <input
        type="text"
        className="form-control mr-sm-2"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-dark my-2 my-sm-0" type="submit">
        Search
      </button>
    </div>
  );
}

export default Search;
