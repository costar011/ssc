import styled from "@emotion/styled";
import Header from "../component/header";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

  .header-line {
    width: 100%
  }

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #47536b;
  }

  .sub-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #1234;
  }
`;

const Main = () => {


  return (
    <Style>
      <div className="header-line">
      <Header/>
      </div>
      <div className="main-container">
        <h1>SSC Lab 웹 페이지 입니다.</h1>
      </div>

      <div className="sub-main-container">
        <h3>다양한 소개 및 포트폴리오를 확인해보세요!</h3>
      </div>
    </Style>
  );
};

export default Main;