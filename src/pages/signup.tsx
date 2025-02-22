import { color } from "../utils";
import { Button } from "@mui/material";
import Header from "../component/header";
import styled from "@emotion/styled";

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
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>      
    </Style>
  );
};

export default Signup;