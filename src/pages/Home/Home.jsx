import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/ui/Title';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;
