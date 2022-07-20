import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", hide: true },
  {
    field: "name",
    headerName: "User name",
    width: 300,
  },
  {
    field: "rol",
    headerName: "User rol",
    width: 150,
  },
  {
    field: "type",
    headerName: "Student Type",
    width: 150,
  },
  {
    field: "options",
    headerName: "Actions",
    renderCell: (rowData) => {
      return (
        <Box>
          <IconButton aria-label="delete">
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
    name: "Franz Coimbra Cocarico",
    rol: "Student",
    type: "Civil",
  },
  {
    id: 2,
    name: "Yhoamir Saenz Uscamayta",
    rol: "Student",
    type: "Civil",
  },
];
export const UserListResults = () => {
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
      onCellClick={handleCellClick}
      componentsProps={{
        row: {
          style: { cursor: "pointer", border: "1px solid #EEEEEE" },
        },
      }}
    />
  );
};
