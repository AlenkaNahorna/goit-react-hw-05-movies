import { Movies } from 'components/Movies/Movies';
import { Outlet } from 'react-router-dom';
import { Box } from 'styles/Box';

export const Home = () => {
  return (
    <Box
      as="header"
      display="flex"
      alignItems="center"
      padding="l"
      width="100%"
      height="100%"
    >
      <div>
        <h2>Home</h2>
        <h3>Trending today</h3>
        <div>Hi, I am at HOME</div>
        Please wait homework will be soon!
      </div>

      <Movies />
      <Outlet />
    </Box>
  );
};
