import { Routes, Route } from 'react-router-dom';
import { Box } from 'styles/Box';
import Home from 'pages/Home/Home';

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
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Box>
  );
};
