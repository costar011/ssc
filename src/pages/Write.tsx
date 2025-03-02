import styled from "@emotion/styled";
import Header from "../component/header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Style = styled.div` /* Style 컴포넌트 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

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

  .button-wapper {
    display: flex;
    justify-content: flex-end;
    margintop: 10px;
    gap: 0.7em;
    margin: 10px 5px;
  }

  .header-line {
    width: 100%;
  }
`;

const Write = () => {
  const navigate = useNavigate();

  const WriteButton = () => {
    alert("글쓰기가 완료되었습니다.");
    navigate("/boardlist");
  };

  const CancelButton = () => {
    alert("글쓰기가 취소되었습니다.");
    navigate("/boardlist");
  };

  return (
    <Style>
      <div className="header-line">
        <Header />
      </div>

      <div className="write-container">
        <h1>글쓰기</h1>
        <input type="text" placeholder="제목을 입력하세요" />
        <textarea placeholder="내용을 입력하세요" />
        <div className="button-wapper">
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
