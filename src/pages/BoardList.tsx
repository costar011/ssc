import Header from "../component/header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "@emotion/styled";
import { styled } from "@mui/material/styles";

const Style = style.div` /* Style 컴포넌트 */
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
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative; /* 부모 컨테이너를 기준으로 버튼 위치 설정 */
  }

  .button-wapper {
    display: flex;
    justify-content: flex-end;
    margintop: 10em;
    gap: 0.7em;
    margin: 10em 5em;
  }
`;


const BoardList = () => {
  const navigate = useNavigate();

  const writeBtn = () => navigate("/write");

  const saveBtn = () => {
    alert("저장하기 버튼 클릭");
  };
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="button-wapper">
      <Button variant="contained">학생 추가하기</Button>
        <Button variant="outlined" onClick={writeBtn}>
          글쓰기
        </Button>
        <Button variant="outlined" onClick={saveBtn}>
          저장하기
        </Button>
      </div>
    </Style>
  );
};

export default BoardList;