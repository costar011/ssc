import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import Chance from "chance";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';

interface Data {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  state: string;
}

interface ColumnData {
  dataKey: keyof Data;
  label: string;
  numeric?: boolean;
  width?: number;
}

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  position: relative;
`;

const WriteButton = styled(Button)`
`;

const chance = new Chance(42);
// createData 함수는 주어진 id를 사용하여 랜덤 데이터를 생성
function createData(id: number): Data {
  return {
    id,
    firstName: chance.first(), // 랜덤한 이름을 생성
    lastName: chance.last(), // 랜덤한 성을 생성
    age: chance.age(), // 랜덤한 나이를 생성
    phone: chance.phone(), // 랜덤한 전화번호를 생성
    state: chance.state({ full: true }), // 랜덤한 주소를 생성
  };
}

// columns 배열은 테이블의 열에 대한 정보를 담고 있음
const columns: ColumnData[] = [
  {
    width: 100,
    label: "First Name", // 열의 제목으로 "First Name"을 사용
    dataKey: "firstName", // 데이터 객체에서 해당 열의 값을 가져올 때 사용할 키
  },
  {
    width: 100,
    label: "Last Name", // 열의 제목으로 "Last Name"을 사용
    dataKey: "lastName", // 데이터 객체에서 해당 열의 값을 가져올 때 사용할 키
  },
  {
    width: 30,
    label: "Age", // 열의 제목으로 "Age"를 사용
    dataKey: "age", // 데이터 객체에서 해당 열의 값을 가져올 때 사용할 키
    numeric: true, // 숫자 형식으로 표시될 열인지 여부를 나타냄
  },
  {
    width: 100,
    label: "State", // 열의 제목으로 "State"를 사용
    dataKey: "state", // 데이터 객체에서 해당 열의 값을 가져올 때 사용할 키
  },
  {
    width: 120,
    label: "Phone Number", // 열의 제목으로 "Phone Number"를 사용
    dataKey: "phone", // 데이터 객체에서 해당 열의 값을 가져올 때 사용할 키
  },
];

// rows 배열은 테이블의 행에 대한 데이터를 담고 있음
const rows: Data[] = Array.from({ length: 200 }, (_, index) =>
  createData(index)
);

// VirtuosoTableComponents 객체는 react-virtuoso 라이브러리에서 사용할 테이블 컴포넌트
const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableHead {...props} ref={ref} />
  )),
  TableRow,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

// fixedHeaderContent 함수는 고정된 헤더 콘텐츠를 반환
function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="body"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{ backgroundColor: "background.paper" }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

// rowContent 함수는 주어진 인덱스와 데이터를 사용하여 행 콘텐츠를 반환
function rowContent(_index: number, row: Data) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

// ReactVirtualizedTable 컴포넌트는 react-virtuoso 라이브러리를 사용하여 가상화된 테이블을 렌더링
export default function ReactVirtualizedTable() {
  return (
    <Style>
      <Paper style={{ height: 500, width: "100%" }}>
        <TableVirtuoso
          data={rows}
          components={VirtuosoTableComponents}
          fixedHeaderContent={fixedHeaderContent}
          itemContent={rowContent}
        />
      </Paper>
      <WriteButton></WriteButton>
    </Style>
  );
}
