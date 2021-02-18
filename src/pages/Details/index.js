import React, { useEffect, useState } from "react";
// react-router-dom
import { useParams, Link, useHistory } from "react-router-dom";
// reac-redux
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../redux/actions";
// component
import { Navbar } from "../../components";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const baseUrl = "http://localhost/movie-app/backend/images/";

  useEffect(() => {
    dispatch(action.fetchDetail(id));
    dispatch(action.getComments(id));
  }, [dispatch, id]);

  const details = useSelector((state) => state.movies.details);
  const comments = useSelector((state) => state.movies.comments);

  const [formData, setFormData] = useState({
    username: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(action.postComment(id, formData.username, formData.text));
    window.location.reload(false);
  };

  return (
    <div className="detail-page">
      <Navbar />
      <div className="container my-3">
        {/* START Button Back */}
        <Link to="/">
          <button className="btn btn-secondary">Back</button>
        </Link>
        {/* END Button Back */}
        <div className="row mt-3">
          {/* START Image Thumbnail */}
          <div className="col-4">
            <img
              src={`${baseUrl}${details.movie_image}`}
              alt={details.movie_image}
              className="img-thumbnail img-fluid"
            />
          </div>
          {/* END Image Thumbnail */}
          {/* START Table */}
          <div className="col-8">
            <h4>{details.movie_name} details</h4>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <td>Movie Name</td>
                  <td>{details.movie_name}</td>
                </tr>
                <tr>
                  <td>Synopsis</td>
                  <td>{details.movie_description}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>{details.movie_category}</td>
                </tr>
                <tr>
                  <td>Date Released</td>
                  <td>{details.date_release}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td>{details.movie_rating} / 5</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* END Table */}
        </div>
        <hr />
        <div className="row">
          {/* START: List Comments */}
          <div className="col-6">
            <div className="row">
              <h5 className="mx-auto">Comments</h5>
            </div>
            {comments.length ? (
              comments.map((comment) => {
                return (
                  <div>
                    <h6>{comment.comment_username}</h6>
                    <p>{comment.comment_text}</p>
                    <hr />
                  </div>
                );
              })
            ) : (
              <p>Belum ada komentar</p>
            )}
          </div>
          {/* END: List Comments */}
          {/* START: Form Comment */}
          <div className="col-6">
            <div className="row">
              <h5 className="mx-auto">Post Comment</h5>
            </div>
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label>Username</label>
                <input
                  name="username"
                  className="form-control"
                  placeholder="Anon"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Comments</label>
                <textarea
                  className="form-control"
                  required
                  cols="30"
                  rows="10"
                  name="text"
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
          {/* END: Form Comment */}
        </div>
      </div>
    </div>
  );
}

export default Details;
