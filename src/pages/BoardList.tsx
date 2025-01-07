import * as React from "react";
import Header from "../component/header";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Style = styled.div`
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

  .button_wapper {
    display: flex;
    justify-content: flex-end;
    margintop: 10px;
    gap: 0.7em;
    margin: 10px 5px;
  }
`;

const BoardList = () => {
  const navigate = useNavigate();

  const writeButton = () => navigate("/write");

  const saveButton = () => {
    alert("저장하기 버튼 클릭");
  };

  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="button_wapper">
        <Button variant="outlined" onClick={writeButton}>
          글쓰기
        </Button>
        <Button variant="outlined" onClick={saveButton}>
          저장하기
        </Button>
      </div>
    </Style>
  );
};

export default BoardList;
