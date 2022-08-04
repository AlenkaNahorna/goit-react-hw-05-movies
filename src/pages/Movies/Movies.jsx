import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getKeyWord } from 'api/getKeyWord';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from 'components/ui/Title';
import { toast } from 'react-toastify';
import { Box } from 'styles/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let filmName = searchParams.get('name') ?? '';
    if (filmName === '') {
      return;
    } else {
      getKeyWord({
        query: filmName,
        page: 1,
      }).then(result => {
        setSearchResult(result.data.results);
      });
    }
  }, [searchParams]);

  const handlerSubmit = value => {
    if (value.query.trim() === '') {
      toast('Please, enter a word', {});
      return;
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <Box
      display="flex"
      flex-direction="column"
      justify-content="center"
      align-items="center"
    >
      <Title>search movie by keyword</Title>
      <Searchbar onSubmit={handlerSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchResult} />
    </Box>
  );
};

export default Movies;
