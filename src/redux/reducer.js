import {
  FETCH_COMMENTS,
  FETCH_DATA,
  FETCH_DETAILS,
  FILTER,
  POST_COMMENT,
  SEARCH,
} from "./actions";

const initialState = {
  data: [],
  details: [],
  searchResult: [],
  filterResult: [],
  comments: [],
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
    case FETCH_DETAILS:
      return {
        ...state,
        details: action.data,
      };
    case FILTER:
      return {
        ...state,
        filterResult: action.data,
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.data,
      };
    case POST_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.data),
      };
    default:
      return state;
  }
};
