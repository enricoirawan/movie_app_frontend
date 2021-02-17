import { FETCH_DATA, FILTER, SEARCH } from "./actions";

const initialState = {
  data: [],
  searchResult: [],
  filterResult: [],
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
    case FILTER:
      return {
        ...state,
        filterResult: action.data,
      };
    default:
      return state;
  }
};
