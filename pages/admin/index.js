import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { StudentBar } from "../../components/admin/dashboard/studentBar";
import { TotalTeachers } from "../../components/admin/dashboard/total-teacher";
import { TotalStudents } from "../../components/admin/dashboard/total-student";
import { TotatlCourses } from "../../components/admin/dashboard/total-courses";
import { StudentCircle } from "../../components/admin/dashboard/studentCircle";
import { DashboardLayout } from "../../components/admin/dashboard-layout";
import { getSession } from "next-auth/react";
import { TotalAdmin } from "../../components/admin/dashboard/total-admin";
import axios from "axios";
const Dashboard = ({ dataDashboard }) => {
  return (
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
              <TotalStudents students={dataDashboard.students} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalTeachers teachers={dataDashboard.teachers} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalAdmin admins={dataDashboard.admins} />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotatlCourses courses={dataDashboard.courses} />
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
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const dataDashboard = await axios.get(
    "https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/users/dashboard"
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (session !== null) {
    if (session.rolId !== 3) {
      return {
        redirect: {
          destination: "/teacher",
          permanent: false,
        },
      };
    }
  }

  return {
    props: {
      dataDashboard: dataDashboard.data,
    },
  };
};
export default Dashboard;
