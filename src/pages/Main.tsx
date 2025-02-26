import styled from "@emotion/styled";
import Header from "../component/header";

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
    dopacity: 0;
    animation: smoothAppear 1s forwards;
    animation-delay: 0.5s;
    margin: 15px 0;
    font-size: 2.4rem;
    font-weight: bold;
    color: midnightblue;

    span{
      font-size: 2.7rem;
      font-family: 'Pacifico', cursive;
    }
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

const Main = () => {
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>
      <div className="main-container">
        <span>SSCLab에 오신것을 환영합니다.</span>
        <span>동아리 웹 페이지 입니다.</span>
      </div>

      <div className="sub-main-container">
        <span>컴퓨터학과 동아리 포트폴리오 입니다.</span>
        <span>SSC란 Societal Safety Communication Lab 뜻합니다.</span>
      </div>
    </Style>
  );
};

export default Main;
