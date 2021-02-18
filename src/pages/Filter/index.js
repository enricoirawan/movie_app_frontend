import React, { useEffect } from "react";
// components
import { Navbar, Category, Search, Card } from "../../components";
// react-router-dom
import { useParams } from "react-router-dom";
// react-redux
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function Filter() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const dataFilter = useSelector((state) => state.movies.filterResult);

  useEffect(() => {
    console.log(category);
    dispatch(actions.filterMoviesByCategory(category));
  }, [dispatch, category]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="search-form mt-3 d-flex align-items-center justify-content-between">
          <div>
            <Category label="All" />
            <Category label="Action" />
            <Category label="Horror" />
            <Category label="Kpop" />
            <Category label="Romance" />
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-start">
          {dataFilter.length ? (
            dataFilter.map((item) => (
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

export default Filter;
