import { Box, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Delete, Edit } from "@mui/icons-material";
import { useRouter } from "next/router";
import { useUsers } from "../../../context/userContext";
import axios from "axios";
import Swal from "sweetalert2";
export const UserListResults = ({ users }) => {
  const { getUserForUpdate } = useUsers();
  const router = useRouter();

  const deleteUser = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "primary",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(
            `https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/user/${id}`
          )
          .then((res) => {
            if (res) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          });
      }
    });
  };
  const columns = [
    { field: "personaId", headerName: "ID", hide: true },
    {
      field: "nombre",
      headerName: "Name",
      width: 300,
    },
    {
      field: "apellidoPaterno",
      headerName: "Father's Last Name",
      width: 200,
    },
    {
      field: "apellidoMaterno",
      headerName: "Mother's Last Name",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "rol",
      headerName: "User rol",
      width: 150,
    },
    {
      field: "tipo",
      headerName: "Student Type",
      width: 150,
    },
    {
      field: "options",
      headerName: "Actions",
      renderCell: ({ row }) => {
        return (
          <Box>
            <IconButton
              aria-label="update"
              onClick={() => {
                getUserForUpdate(row);
                router.push(`/admin/users/edit/${row.personaId}`);
              }}
            >
              <Edit color="primary" />
            </IconButton>
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteUser(row.personaId);
              }}
            >
              <Delete color="error" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleCellClick = (param, event) => {
    param.field === "options" && event.stopPropagation();
  };
  return (
    <DataGrid
      pageSize={10}
      columns={columns}
      getRowId={(rowData) => rowData.personaId}
      disableColumnSelector={true}
      rows={users}
      sx={{ backgroundColor: "#FFFFFF" }}
      rowsPerPageOptions={[10]}
      disableSelectionOnClick
      onCellClick={handleCellClick}
      componentsProps={{
        row: {
          style: { border: "1px solid #EEEEEE" },
        },
      }}
    />
  );
};
