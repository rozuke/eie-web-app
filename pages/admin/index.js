import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { StudentBar } from "../../components/admin/dashboard/studentBar";
import { TotalTeachers } from "../../components/admin/dashboard/total-teacher";
import { TotalStudents } from "../../components/admin/dashboard/total-student";
import { TotatlCourses } from "../../components/admin/dashboard/total-courses";
import { StudentCircle } from "../../components/admin/dashboard/studentCircle";
import { DashboardLayout } from "../../components/admin/dashboard-layout";

const Dashboard = () => (
  <DashboardLayout>
    <Head>
      <title>EIE Admin</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalStudents />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotalTeachers />
          </Grid>
          <Grid item xl={3} lg={3} sm={6} xs={12}>
            <TotatlCourses sx={{ height: "100%" }} />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <StudentBar />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <StudentCircle sx={{ height: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Dashboard;
