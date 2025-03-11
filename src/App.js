import React from "react";
import Customer from "./components/Customer";
import "./App.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
}));

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/64?random=1",
    name: "이혜인",
    birthday: "980820",
    gender: "여자",
    job: "직장인",
  },
  {
    id: 2,
    image: "https://picsum.photos/64?random=2",
    name: "이혜원",
    birthday: "020509",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://picsum.photos/64?random=3",
    name: "이해찬",
    birthday: "100613",
    gender: "남자",
    job: "중학생",
  },
];

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
