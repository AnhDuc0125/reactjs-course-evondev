import { SET_DATA, SET_LOADING, SET_QUERY, SET_URL } from './actions';

const reducer = (store, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...store, hits: action.payload };
    case SET_LOADING:
      return { ...store, loading: action.payload };
    case SET_QUERY:
      return { ...store, query: action.payload };
    case SET_URL:
      return { ...store, url: action.payload };
    default:
      break;
  }
};

export default reducer;
