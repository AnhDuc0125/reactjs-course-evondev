import axios from 'axios';
import { useEffect, useState } from 'react';

const getPhotos = async (page) => {
  try {
    const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleLoadMore();
  }, []);

  const handleLoadMore = async () => {
    const data = await getPhotos(page);
    const newPhotos = [...photos, ...data];
    setPhotos(newPhotos);
    setPage(page + 1);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-5 p-5">
        {photos.map((photo) => (
          <div key={photo.id} className="shadow-lg rounded-lg h-[250px] p-3">
            <img
              src={photo.download_url}
              alt={photo.author}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleLoadMore}
          className="bg-blue-400 hover:bg-blue-600 text-white px-5 py-2 rounded-full inline-flex"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;
