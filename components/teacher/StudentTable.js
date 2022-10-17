import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useCourse } from "../../context/courseContext";
import { useRouter } from "next/router";

const columns = [
  { field: "usuarioId", headerName: "ID", hide: true },
  {
    field: "nombre",
    headerName: "Name",
    width: 400,
  },
  {
    field: "totalParticipaciones",
    headerName: "Total participations",
    width: 200,
  },
  {
    field: "notaHomework",
    headerName: "Homework",
    headerClassName: "super-app-theme--cell-hw",
    cellClassName: "super-app-theme--cell-hw",
    width: 200,
  },
  {
    field: "notaEE",
    headerName: "Evaluation Exercise",
    headerClassName: "super-app-theme--cell-ee",
    cellClassName: "super-app-theme--cell-ee",
    width: 200,
  },
  {
    field: "notaLaboratory",
    headerName: "Laboratory",
    headerClassName: "super-app-theme--cell-lab",
    cellClassName: "super-app-theme--cell-lab",
    width: 200,
  },
];

const StudentTable = ({ ustudentsResults }) => {
  const { getStudentProgress } = useCourse();
  const router = useRouter();
  return (
    <Box
      sx={{
        mt: 3,
        height: 400,
        boxShadow: 3,
        borderRadius: 2,
        "& .super-app-theme--cell-hw": {
          backgroundColor: "rgba(255, 0, 110, 1)",
          color: "#FFFFFF",
        },
        "& .super-app-theme--cell-ee": {
          backgroundColor: "rgba(251, 86, 7, 1)",
          color: "#FFFFFF",
        },
        "& .super-app-theme--cell-lab": {
          backgroundColor: "rgba(58, 134, 255, 1)",
          color: "#FFFFFF",
        },
      }}
    >
      <DataGrid
        pageSize={10}
        columns={columns}
        getRowId={(rowData) => rowData.usuarioId}
        disableColumnSelector={true}
        rows={ustudentsResults}
        sx={{ backgroundColor: "#FFFFFF" }}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onRowClick={({ row }) => {
          getStudentProgress(row);
          router.push(`${router.asPath}/student/${row.usuarioId}`);
          console.log(row);
        }}
        componentsProps={{
          row: {
            style: { border: "1px solid #EEEEEE", cursor: "pointer" },
          },
        }}
      />
    </Box>
  );
};

export default StudentTable;
