import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function createData(
  id,
  name,
  homework,
  evaluationE,
  laboratory,
  participations
) {
  return { id, name, homework, evaluationE, laboratory, participations };
}

const rows = [
  createData(1, "Rodrigo Estiven", 80, 30, 15, 21),
  createData(2, "Rodrigo Acosta", 80, 20, 67, 11),
  createData(3, "Ricardo Estiven", 80, 50, 12, 61),
  createData(4, "Malandro Estiven", 80, 36, 15, 71),
  createData(5, "Palanca Estiven", 80, 31, 76, 11),
];
const StudentTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Participations</TableCell>
            <TableCell align="right">Homework</TableCell>
            <TableCell align="right">Evaluation Excersice</TableCell>
            <TableCell align="right">Laboratory</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.participations}</TableCell>
              <TableCell align="right">{row.homework}</TableCell>
              <TableCell align="right">{row.evaluationE}</TableCell>
              <TableCell align="right">{row.laboratory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
