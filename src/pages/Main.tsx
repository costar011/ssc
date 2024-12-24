import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  z-index: 1;

  @media (max-width: 768px) {
    &:before {
      width: 80%;
      height: 80%;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const LogoHeader = () => {
  alert("Logo Clicked");
};

const LoginHeader = () => {
  alert("Login Clicked");
};

const Main = () => {
  return (
    <Style>
      <HeaderContainer>
        <Button
          className="logo"
          variant="contained"
          color="inherit"
          size="medium"
          onClick={LogoHeader}
        >
          Logo
        </Button>
        <Button
          className="login"
          variant="contained"
          color="inherit"
          size="medium"
          onClick={LoginHeader}
        >
          로그인/회원가입
        </Button>
      </HeaderContainer>
    </Style>
  );
};

export default Main;
