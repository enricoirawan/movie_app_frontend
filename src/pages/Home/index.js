import React, { useEffect } from "react";
// component
import { Card, Category, Navbar, Search } from "../../components";
// redux
import { useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.fetchData());
  }, [dispatch]);

  const data = useSelector((state) => state.movies.data);

  return (
    <div className="App">
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
          {data.map((item) => (
            <Card
              key={parseInt(item.movie_id)}
              id={parseInt(item.movie_id)}
              title={item.movie_name}
              description={item.movie_description}
              imageUrl={item.movie_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
