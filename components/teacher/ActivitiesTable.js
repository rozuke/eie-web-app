import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
const columns = [
  { field: "id", headerName: "ID", hide: true },
  {
    field: "name",
    headerName: "Name Activity",
    width: 300,
  },
  {
    field: "type",
    headerName: "Activity Type",
    width: 150,
  },
  {
    field: "date",
    headerName: "Creation Date",
    width: 150,
  },
  {
    field: "options",
    headerName: "Actions",
    renderCell: (rowData) => {
      return (
        <Box>
          <IconButton aria-label="delete">
            <Delete />
          </IconButton>
          <IconButton aria-label="update">
            <Edit />
          </IconButton>
        </Box>
      );
    },
  },
  {
    field: "view",
    headerName: "View activity",
    renderCell: () => {
      return (
        <Link href={"/"}>
          <IconButton aria-label="delete">
            <Visibility />
          </IconButton>
        </Link>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    name: "First Topic",
    type: "Forum",
    date: "2020-01-01",
    options: null,
  },
];
const ActivitiesTable = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
    />
  );
};

export default ActivitiesTable;
