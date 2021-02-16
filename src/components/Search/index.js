import React, { useState } from "react";
// react-redux
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
// react-router-dom
import { useHistory } from "react-router-dom";

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    console.log(keyword);
    event.preventDefault();
    dispatch(actions.searchData(keyword));
    history.push(`/search/${keyword}`);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
    console.log(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline mx-auto">
      <input
        className="form-control mr-sm-2"
        placeholder="Search"
        onChange={onChange}
        value={keyword}
      />
      <button type="submit" className="btn btn-dark my-2 my-sm-0">
        Search
      </button>
    </form>
  );
}

export default Search;
