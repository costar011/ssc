import { color } from "../utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "../component/header";
import styled from "@emotion/styled";

import Stack from "@mui/material/Stack";

const Style = styled.div` /* Style 컴포넌트 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  .header-line {
    width: 100%;
  }
`;

const Register = () => {
  return (
    <Style>
      <Stack className="header-line">
        <Header />
      </Stack>
    </Style>
  );
};
export default Register;
