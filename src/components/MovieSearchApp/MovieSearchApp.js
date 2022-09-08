import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import useDebounce from '../../hooks/useDebounce';
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading';

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const debounce = useDebounce(searchValue, 500);

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const callApi = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=aa3572abb9b9cf6df533a4f3392bd512&query='${debounce}'`
      );
      setMovies(response.data.results);
      setLoading(false);
    };

    callApi();
  }, [debounce]);
  return (
    <div>
      <div className="w-[512px] h-[59px] bg-white mx-auto mb-[100px] rounded-lg border border-purple-400  focus-within:shadow-[0px_0px_0px_3px_rgba(125,106,255,0.2)]">
        <input
          type="text"
          placeholder="Search movie..."
          onChange={handleSearchInput}
          className="w-full h-full p-5 outline-none border-none bg-transparent"
        />
      </div>
      {loading && <p>Loading...</p>}
      {/* {!loading && (
        <div className="flex flex-wrap gap-5 justify-evenly">
          {movies.map((item) => (
            <MovieItem
              key={item.id}
              title={item.title}
              poster={item.poster_path}
              overview={item.overview}
              vote={item.vote_average}
            />
          ))}
        </div>
      )} */}
      <SkeletonLoading />
    </div>
  );
};

export default MovieSearchApp;
