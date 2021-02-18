import React from "react";
// react-router-dom
import { useHistory } from "react-router-dom";

function Category({ label }) {
  const history = useHistory();

  const onClickHandler = (label) => {
    if (label === "All") {
      history.push("/");
    } else if (label === "Action") {
      history.push("/filter/Action");
    } else if (label === "Horror") {
      history.push("/filter/Horror");
    } else if (label === "Kpop") {
      history.push("/filter/Kpop");
    } else if (label === "Romance") {
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
