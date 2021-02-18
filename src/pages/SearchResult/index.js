import React from "react";
// react-redux
import { useSelector } from "react-redux";
// react-router-dom
import { Link, useParams } from "react-router-dom";
// components
import { Card, Navbar } from "../../components";

function SearchResult() {
  const { keyword } = useParams();
  const data = useSelector((state) => state.movies.searchResult);
  return (
    <div className="search-result-page">
      <Navbar />
      <div className="container mt-3">
        <Link to="/">
          <button className="btn btn-secondary">Back</button>
        </Link>
        {data.length ? (
          <h5 className="mt-2">Search Result of {keyword}</h5>
        ) : (
          ""
        )}
        <div className="row d-flex align-items-center justify-content-between">
          {data.length ? (
            data.map((item) => (
              <Card
                key={parseInt(item.movie_id)}
                id={parseInt(item.movie_id)}
                title={item.movie_name}
                description={item.movie_description}
                imageUrl={item.movie_image}
              />
            ))
          ) : (
            <h5 className="mx-auto mt-3">
              Movie not found, please try another one
            </h5>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
