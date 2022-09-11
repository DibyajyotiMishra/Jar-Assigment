import axios from 'axios';
import config from '../config';

export const getMovies = async (page: number, type: string) => {
  const response = await axios.get(
    `${config.BASE_URL}/movie/${type}?api_key=${config.API_KEY}&language=en-US&page=${page}`,
  );
  return response.data;
};

export const SEARCH_API_URL = async (query: string) => {
  console.log('query', query);

  const response = await axios.get(
    `${config.BASE_URL}/search/movie/?api_key=${config.API_KEY}&language=en-US&query=${query}`,
  );
  console.log(response);

  return response.data;
};

export const getMovieImages = async (id: number) => {
  const response = await axios.get(
    `${config.BASE_URL}/movie/${id}/images?api_key=${config.API_KEY}&language=en-US&include_image_language=en`,
  );
  return response.data;
};
