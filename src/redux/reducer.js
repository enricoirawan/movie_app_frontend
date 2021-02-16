import { FETCH_DATA, SEARCH } from "./actions";

const initialState = {
  data: [],
  searchResult: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.data,
      };
    case SEARCH:
      return {
        ...state,
        searchResult: action.data,
      };
    default:
      return state;
  }
};
