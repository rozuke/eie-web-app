import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useCourse } from "../../context/courseContext";
import TeacherService from "../../service/teacherService";

const ActivitiesTable = ({ activities, courseId }) => {
  const { getForumForUpdate } = useCourse();
  const router = useRouter();
  const [activitiesList, setActivitiesList] = useState();
  const removeForum = async (courseId, forumId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete this user",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#003566",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        TeacherService.deleteForum(courseId, forumId)
          .then((res) => {
            if (res) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
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
    { field: "actividadId", headerName: "ID", hide: true },
    {
      field: "topico",
      headerName: "Name Activity",
      width: 300,
    },
    {
      field: "tipo",
      headerName: "Activity Type",
      width: 150,
    },
    {
      field: "fecha",
      headerName: "Creation Date",
      width: 150,
    },
    {
      field: "options",
      headerName: "Actions",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Link href={`${router.asPath}/edit-forum/${row.actividadId}`}>
              <IconButton
                aria-label="update"
                onClick={() => {
                  getForumForUpdate(row);
                }}
              >
                <Edit color="primary" />
              </IconButton>
            </Link>

            <IconButton
              aria-label="delete"
              onClick={() => {
                removeForum(courseId, row.actividadId);
              }}
            >
              <Delete color="error" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  useEffect(() => {
    setActivitiesList(activities);
  }, [activitiesList]);
  return (
    <Box
      sx={{
        mt: 3,
        height: 500,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <DataGrid
        rows={activities}
        columns={columns}
        getRowId={(row) => row.actividadId}
        pageSize={10}
        sx={{ backgroundColor: "#FFFFFF" }}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        onRowClick={({ row }) => {
          getForumForUpdate(row);
          router.push(`${router.asPath}/forum-comments/${row.actividadId}`);
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

export default ActivitiesTable;
