import Header from "../component/header";
import Stack from '@mui/material/Stack';

const Main = () => {
  return (
    <Stack
    direction="column"
    height="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
    position="relative"
  >
    <Header />
  </Stack>
  );
};

export default Main;
