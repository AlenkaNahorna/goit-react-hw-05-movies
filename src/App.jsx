import { Routes, Route } from 'react-router-dom';
import { Box } from 'styles/Box';
import { Home } from 'components/Home/Home';
import { Movies } from 'components/Movies/Movies';

export const App = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies" element={<Movies />}></Route>
        </Route>
      </Routes>
    </Box>
  );
};
