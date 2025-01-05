import styled from "@emotion/styled";
import { color } from "../utils";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .header-container {
    display: flex;
    justify-content: space-between; /* 로고와 메뉴 버튼을 양 끝으로 배치 */
    align-items: center;
    width: 100%;
    padding: 15px 25px;
    background-color: ${color.background};
  }

  .logo-button {
    font-size: 20px;
    font-weight: bold;
    color: ${color.default_font};
    box-shadow: none;
    margin-right: auto; /* 로고를 왼쪽 정렬 */
  }

  .menu-buttons {
    display: flex;
    gap: 2em; /* 메뉴 버튼들 간격 설정 */
    margin-left: auto; /* 메뉴 버튼을 오른쪽 정렬 */
  }

  .menu-button {
    font-size: 18px;
    color: ${color.default_font};
    min-width: auto;
    padding: 0;
  }

  .menu-button:hover {
    text-decoration: underline;
  }

  .login-button {
    font-size: 15px;
    font-weight: bold;
    color: #fff;
    background-color: #d60202;
    border-radius: 20px;
    padding: 5px 15px;
    margin-left: 0.3em;
  }

  .login-button:hover {
    background-color: #8f0303;
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const LogoClick = () => navigate("/");
  const PortfolioClick = () => {
    alert("Portfolio Clicked");
  };
  const BoardListClick = () => navigate("/boardlist");
  const IntroduceClick = () => {
    alert("Introduce Clicked");
  };
  const LoginClick = () => navigate("/login");

  return (
    <Style>
      <div className="header-container">
        <Button className="logo-button" onClick={LogoClick}>LOGO</Button>
        <div className="menu-buttons">
          <Button className="menu-button" onClick={PortfolioClick}>
            포트폴리오
          </Button>
          <Button className="menu-button" onClick={BoardListClick}>
            게시판
          </Button>
          <Button className="menu-button" onClick={IntroduceClick}>
            소개
          </Button>
          <Button className="login-button" onClick={LoginClick}>
            로그인/회원가입
          </Button>
        </div>
      </div>
    </Style>
  );
};
export default Login;
