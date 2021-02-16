import { FETCH_DATA } from "./actions";

const initialState = {
  data: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
