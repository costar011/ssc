import styled from "@emotion/styled";
import Header from "../component/header";
import { Button } from "@mui/material";

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

  .write-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 80%;
    margin-top: 2em;
  }

  h1 {
    font-size: 2em;
  }

  input {
    width: 100%;
    height: 2em;
    padding: 0.5em;
    font-size: 1em;
  }

  textarea {
    width: 100%;
    height: 20em;
    padding: 0.5em;
    font-size: 1em;
  }

  button {
    width: 100%;
    height: 3em;
    font-size: 1em;
  }

  .btn-container {
    display: flex;
    gap: 1em;
  }
`;

const WriteButton = () => {
  alert("글쓰기 버튼 클릭");
};

const CancelButton = () => {
  alert("취소 버튼 클릭");
};

export default function Write() {
  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>
      <div className="write-container">
        <h1>글쓰기</h1>
        <input type="text" placeholder="제목을 입력하세요" />
        <textarea placeholder="내용을 입력하세요" />
        <div className="btn-container">
          <Button variant="contained" color="primary" onClick={WriteButton}>
            글쓰기
          </Button>
          <Button variant="contained" color="error" onClick={CancelButton}>
            취소
          </Button>
        </div>
      </div>
    </Style>
  );
};
