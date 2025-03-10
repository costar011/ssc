import { color } from "../utils";
import { Button } from "@mui/material";
import Header from "../component/header";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";

const Signup = () => {
  const navigate = useNavigate();
  const Btn = () => navigate("/");
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

export default Signup;