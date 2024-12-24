import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  
  position: relative;
  z-index: 1;
`;
const Main = () => {
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  );
};

export default Main;
