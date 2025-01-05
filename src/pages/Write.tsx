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

  .main-container {
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    gap: 0.7em;
    width: 80%;
    height: 100%;
  }

  h1 {
    font-size: 2em;
  }

  input {
    width: 100%;
    height: 3em;
    padding: 0.5em;
    font-size: 1em;
  }
  .textarea {
    width: 100%;
    height: 300px;
    padding: 0.5em;
    font-size: 1em;
    text-align: left; /* 텍스트 왼쪽 정렬 */
    vertical-align: top; /* 텍스트 상단 정렬 */
    resize: none; /* 필요 시 크기 조절 비활성화 */
  }

  .btn-container {
    width: 100%;
    display: flex;
    gap: 1em;
    width: 200px;
    border-radius: 15px;
  }
`;
const Write = () => {
  const WriteButton = () => {
    alert("글쓰기 버튼 클릭");
  };

  const CancelButton = () => {
    alert("취소 버튼 클릭");
  };

  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="main-container">
        <h1>글쓰기</h1>
        <input type="text" placeholder="제목을 입력하세요" />
        <textarea className="textarea" placeholder="내용을 입력하세요" />

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

export default Write;
