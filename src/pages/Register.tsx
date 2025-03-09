import { color } from "../utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../component/header";
import styled from "@emotion/styled";

import Stack from "@mui/material/Stack";

const Register = () => {
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
export default Register;
