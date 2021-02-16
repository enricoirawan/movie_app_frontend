import React from "react";
// react-router-dom
import { useParams, Link } from "react-router-dom";
// reac-redux
import { useSelector } from "react-redux";
// component
import { Navbar } from "../../components";

function Details() {
  const { id } = useParams();
  const baseUrl = "http://localhost/movie-app/backend/images/";

  const selectedMovie = useSelector((state) =>
    state.movies.data.find((movie) => movie.movie_id === id)
  );

  return (
    <div className="detail-page">
      <Navbar />
      <div class="container mt-3">
        <Link to="/">
          <button className="btn btn-secondary">Back</button>
        </Link>
        <div class="row mt-3">
          <div class="col-4">
            <img
              src={`${baseUrl}${selectedMovie.movie_image}`}
              alt={selectedMovie.movie_image}
              className="img-thumbnail img-fluid"
            />
          </div>
          <div class="col-8">
            <h4>{selectedMovie.movie_name} details</h4>
            <table class="table table-striped">
              <tbody>
                <tr>
                  <td>Movie Name</td>
                  <td>{selectedMovie.movie_name}</td>
                </tr>
                <tr>
                  <td>Synopsis</td>
                  <td>{selectedMovie.movie_description}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>{selectedMovie.movie_category}</td>
                </tr>
                <tr>
                  <td>Date Released</td>
                  <td>{selectedMovie.date_release}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{selectedMovie.movie_rating} / 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
