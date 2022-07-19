import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", hide: true },
  {
    field: "name",
    headerName: "Course name",
    width: 300,
  },
  {
    field: "level",
    headerName: "Level",
    width: 150,
  },
  {
    field: "date",
    headerName: "Creation date",
    width: 150,
  },
  {
    field: "options",
    headerName: "Actions",
    renderCell: (rowData) => {
      return (
        <Box>
          <IconButton aria-label="delete" onClick={() => alert("clinkc")}>
            <Delete color="error" />
          </IconButton>
          <IconButton aria-label="update">
            <Edit color="primary" />
          </IconButton>
        </Box>
      );
    },
  },
];
const rows = [
  {
    id: 1,
    name: "Level I TM",
    level: "Level I",
    date: "2020-01-01",
  },
  {
    id: 2,
    name: "Level I TM",
    level: "Level I",
    date: "2020-01-01",
  },
];
export const CourseListResult = () => {
  const handleCellClick = (param, event) => {
    param.field === "options" && event.stopPropagation();
  };
  return (
    <DataGrid
      pageSize={10}
      columns={columns}
      rows={rows}
      sx={{ backgroundColor: "#FFFFFF" }}
      rowsPerPageOptions={[10]}
      disableSelectionOnClick
      onRowClick={(rowData) => {
        alert(rowData);
      }}
      onCellClick={handleCellClick}
      componentsProps={{
        row: {
          style: { cursor: "pointer", border: "1px solid #EEEEEE" },
        },
      }}
    />
  );
};
