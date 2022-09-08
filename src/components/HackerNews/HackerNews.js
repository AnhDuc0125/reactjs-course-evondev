import { useEffect, useRef, useReducer } from 'react';
import axios from 'axios';
import initialStore from './store';
import { SET_LOADING, SET_DATA, SET_QUERY, SET_URL } from './actions';
import reducer from './reducer';

const HackerNews = () => {
  const [state, dispatch] = useReducer(reducer, initialStore);
  const handleGetData = useRef();

  handleGetData.current = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const response = await axios.get(state.url);

      setTimeout(() => {
        dispatch({ type: SET_DATA, payload: response.data?.hits || [] });

        dispatch({ type: SET_LOADING, payload: false });
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleGetData.current();
  }, [state.url]);

  return (
    <div className="p-5 mx-auto mt-5 shadow-md w-2/4 rounded-md flex flex-wrap">
      <div className="w-full flex gap-3 items-center">
        <input
          defaultValue={state.query}
          onChange={(e) => dispatch({ type: SET_QUERY, payload: e.target.value })}
          type="text"
          className="border-2 border-blue-400 focus:border-blue-600 outline-none rounded-md p-3 block w-full"
        />
        <button
          onClick={() =>
            dispatch({
              type: SET_URL,
              payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`,
            })
          }
          className="bg-blue-400 p-3 text-white rounded-md font-semibold"
        >
          Search
        </button>
      </div>
      {state.loading && (
        <div className="w-8 h-8 border-4 border-blue-400 border-r-transparent rounded-full animate-spin mx-auto my-5"></div>
      )}
      {!state.loading &&
        state.hits.length > 0 &&
        state.hits
          .filter((hit) => hit.title !== null)
          .map((hit, index) => (
            <h3
              className="inline-block p-3 m-3 bg-blue-300 rounded-lg shadow-md cursor-pointer"
              key={index}
            >
              {hit.title}
            </h3>
          ))}
    </div>
  );
};

export default HackerNews;
