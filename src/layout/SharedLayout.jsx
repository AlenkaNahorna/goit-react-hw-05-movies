import { Outlet } from 'react-router-dom';
import { Header } from 'layout/common/Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'styles/Box';

export const SharedLayout = () => {
  return (
    <Box width="100%">
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="xl"
      >
        <Outlet />
      </Box>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Box>
  );
};
