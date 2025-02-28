import { color } from "../utils";
import { Button } from "@mui/material";
import Header from "../component/header";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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

const Signup = () => {
  const navigate = useNavigate();
  const Btn = () => navigate("/");
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <Button onClick={Btn}>login</Button>      
    </Style>
  );
};

export default Signup;