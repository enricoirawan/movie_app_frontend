export const FETCH_DATA = "FETCH_DATA";

export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch(
      "http://localhost/movie-app/backend/api/get_data.php"
    );

    if (response.ok) {
      const responseJson = await response.json();
      console.log("response ->", responseJson);
      dispatch({
        type: FETCH_DATA,
        data: responseJson,
      });
    }
  };
};
