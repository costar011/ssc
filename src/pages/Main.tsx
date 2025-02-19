import styled from "@emotion/styled";
import Header from "../component/header";
import { Button } from "@mui/material";

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

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .sub-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
`;

const url = "https://www.instagram.com/dev.yerim/";

const Main = () => {
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>
      <div className="main-container">
        <h1>SSCLab에 오신것을 환영합니다.</h1>
        <h1>동아리 웹 페이지 입니다.</h1>
      </div>

      <div className="sub-main-container">
        <h3>대학교 컴퓨터학과 동아리 포트폴리오 입니다.</h3>
        <h3>SSC란 Societal Safety Communication Lab 뜻합니다.</h3>
        <h3>궁금한점이 있으시면 연락주세요.</h3>
        <Button variant="outlined" onClick={() => {window.open(url)}}>instagram</Button>
      </div>
    </Style>
  );
};

export default Main;
