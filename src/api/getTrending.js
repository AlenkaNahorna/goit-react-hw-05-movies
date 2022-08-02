import { customAxios } from './customAxios';
import { toast } from 'react-toastify';

export const getTrending = async () => {
  try {
    const response = await customAxios.get('/trending/movie/day');
    console.log(response);
    const { data } = response;
    return data;
  } catch (error) {
    toast.error(`Sorry, something went wrong ${error}`);
  }
};
