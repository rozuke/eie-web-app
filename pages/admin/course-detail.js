import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { CourseListToolbar } from "../../components/admin/course/course-list-toolbar";
import { DashboardLayout } from "../../components/admin/dashboard-layout";
import { UserListResults } from "../../components/admin/user/user-list-results";

const CourseDetail = () => (
  <DashboardLayout>
    <Head>
      <title>Products | Material Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <CourseListToolbar />
        <Box sx={{ mt: 3, height: 400, boxShadow: 3, borderRadius: 2 }}>
          <UserListResults />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default CourseDetail;
