import { Movies } from 'components/Movies/Movies';
import { Outlet } from 'react-router-dom';
import { Box } from 'styles/Box';

export const Home = () => {
  return (
    <Box
      as="header"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <h2>Trending today</h2>
      <Movies />
      <Outlet />
      <div>Hi, I am at HOME</div>
      <div>Please wait homework will be soon!</div>
    </Box>
  );
};
