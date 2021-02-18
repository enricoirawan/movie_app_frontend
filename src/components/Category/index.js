import React from "react";
// react-router-dom
import { useHistory } from "react-router-dom";
// react-redux
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function Category({ label }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const filterMovie = (label) => {
    dispatch(actions.filterMoviesByCategory(label));
  };

  const onClickHandler = (label) => {
    if (label === "All") {
      history.push("/");
    } else if (label === "Action") {
      filterMovie(label);
      history.push("/filter/Action");
    } else if (label === "Horror") {
      filterMovie(label);
      history.push("/filter/Horror");
    } else if (label === "Kpop") {
      filterMovie(label);
      history.push("/filter/Kpop");
    } else if (label === "Romance") {
      filterMovie(label);
      history.push("/filter/Romance");
    }
  };

  return (
    <button
      onClick={() => onClickHandler(label)}
      className="btn btn-outline-dark mr-2"
    >
      {label}
    </button>
  );
}

export default Category;
