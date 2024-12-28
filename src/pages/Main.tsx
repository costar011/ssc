import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;
`;

// 헤더 컨테이너
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 10px 20px;
  background-color: #f8f8f8;
`;

// 로고 버튼 스타일
const LogoButton = styled(Button)`
  font-size: 20px;
  font-weight: bold;
  color: #000;
  background-color: transparent;

  box-shadow: none;

  &:hover {
    background-color: transparent;
  }
`;

// 메뉴 버튼 스타일
const MenuButton = styled(Button)`
  font-size: 16px;
  font-weight: normal;
  color: #000;
  background-color: transparent;
  box-shadow: none;
  padding: 0;
  min-width: auto;
  margin-left: 20px;

  &:hover {
    background-color: transparent;
    text-decoration: underline;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

// 로그인 버튼 스타일
const LoginButton = styled(Button)`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #d60202;

  border-radius: 20px;
  padding: 5px 15px;
  margin-left: 20px;

  &:hover {
    background-color: #8f0303;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const SubMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const portfolioHeader = () => {
  alert("Portfolio Clicked");
};

const introduceHeader = () => {
  alert("Introduce Clicked");
};

const LoginHeader = () => {
  alert("Login Clicked");
};

const Main = () => {
  return (
    <Style>
      {/* 헤더 컨테이너 */}
      <HeaderContainer>
        {/* 로그인 버튼 */}
        <LogoButton>LOGO</LogoButton>
        <div>
          {/* 메뉴 버튼들 */}
          <MenuButton onClick={portfolioHeader}>포트폴리오</MenuButton>
          <MenuButton>게시판</MenuButton>
          <MenuButton onClick={introduceHeader}>소개</MenuButton>
          <LoginButton onClick={LoginHeader}>로그인/회원가입</LoginButton>
        </div>
      </HeaderContainer>

      <MainContainer>
        <h1>메인 페이지</h1>
      </MainContainer>

      <SubMainContainer>
        <h1>서브 메인 페이지</h1>
      </SubMainContainer>
    </Style>
  );
};

export default Main;
