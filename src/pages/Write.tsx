import styled from "@emotion/styled";
import Header from "../component/header";
import { Button } from "@mui/material";
import { color } from "../utils";

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .menu-buttons {
    display: flex;
    gap: 5em; /* 메뉴 버튼들 간격 설정 */
    margin-left: auto; /* 메뉴 버튼을 오른쪽 정렬 */
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

  button:hover {
    background-color: #f0f0f0;
  }
`;

export default function Write() {
  return (
    <Style>
      <div className="menu-buttons">
        <Header />
      </div>
      <div className="write-container">
        <h1>글쓰기</h1>
        <input type="text" placeholder="제목을 입력하세요" />
        <textarea placeholder="내용을 입력하세요" />
        <Button variant="contained" color="primary">
          글쓰기
        </Button>
        <Button variant="contained" color="error">
          취소
        </Button>
      </div>
    </Style>
  );
}
