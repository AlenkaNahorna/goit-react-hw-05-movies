import { customAxios } from './customAxios';
import { toast } from 'react-toastify';

export const getMovieByKey = async query => {
  try {
    const { data } = await customAxios.get('/search/movie', {
      params: query,
    });
    return data;
  } catch (error) {
    toast.error(`Sorry, something went wrong ${error}`);
  }
};
