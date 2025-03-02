import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Header from "../component/header";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import style from "@emotion/styled";

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

/*
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  Departmentnumber: number,
  grade: number,
  phonenumber: string
) {
  return { name, Departmentnumber, grade, phonenumber};
}

const rows = [
  createData("말똥이", 20, 2, "010-1234-1234"),
  createData("라이언", 21, 3, "010-2222-2222"),
  createData("어피치", 19, 5, "010-1212-3434"),
  createData("뽀로로", 20, 2, "010-6666-3333"),
  createData("크롱롱", 23, 1, "010-9999-2368"),
];

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

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400, marginTop: 1 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>학생 이름</StyledTableCell>
              <StyledTableCell align="right">학번</StyledTableCell>
              <StyledTableCell align="right">학년</StyledTableCell>
              <StyledTableCell align="right">전화번호</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Departmentnumber}</StyledTableCell>
                <StyledTableCell align="right">{row.grade}</StyledTableCell>
                <StyledTableCell align="right">{row.phonenumber}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="button-wapper">
      <Button variant="contained">학생 추가하기</Button>
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
*/

/* 보드 리스트 페이지
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
*/