export const FETCH_DATA = "FETCH_DATA";
export const FETCH_DETAILS = "FETCH_DETAILS";
export const SEARCH = "SEARCH";
export const FILTER = "FILTER";
export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const POST_COMMENT = "POST_COMMENTS";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost/movie-app/backend/api/get_data.php"
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FETCH_DATA,
        data: responseJson,
      });
    }
  };
};

export const fetchDetail = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/get_single_data.php?id=${id}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FETCH_DETAILS,
        data: responseJson,
      });
    }
  };
};

export const searchData = (keyword) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/search.php?keyword=${keyword}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: SEARCH,
        data: responseJson,
      });
    }
  };
};

export const filterMoviesByCategory = (category) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/get_by_category.php?category=${category}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FILTER,
        data: responseJson,
      });
    }
  };
};

export const getComments = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/get_comment.php?id=${id}`
    );

    if (response.ok) {
      const responseJson = await response.json();
      dispatch({
        type: FETCH_COMMENTS,
        data: responseJson,
      });
    }
  };
};

export const postComment = (id, username, comment_text) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://localhost/movie-app/backend/api/post_comment.php?id=${id}&username=${username}&comment_text=${comment_text}`
    );

    if (response.ok) {
      console.log(response);
      const responseJson = await response.json();
      console.log(responseJson);
      dispatch({
        type: POST_COMMENT,
        data: responseJson,
      });
    }
  };
};
