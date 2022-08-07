import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getTrendingMovies } from 'api/getTrendingMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/ui/Title';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function trending() {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      }
    }
    trending();
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
