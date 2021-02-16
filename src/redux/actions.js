export const FETCH_DATA = "FETCH_DATA";
export const SEARCH = "SEARCH";

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
