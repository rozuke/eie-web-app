import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { CourseListToolbar } from "../../../components/admin/course/course-list-toolbar";
import CourseListResult from "../../../components/admin/course/course-list-result";
import { DashboardLayout } from "../../../components/admin/dashboard-layout";
import { getSession } from "next-auth/react";
import axios from "axios";
const Course = ({ courses }) => (
  <DashboardLayout>
    <Head>
      <title>Courses | EIE </title>
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
          <CourseListResult courses={courses} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const courses = await axios.get(
    "https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api/courses"
  );

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    // if (session.rolId !== 3) {
    //   return {
    //     redirect: {
    //       destination: "/teacher",
    //       permanent: false,
    //     },
    //   };
    // }
  }

  return {
    props: {
      courses: courses.data,
    },
  };
};
export default Course;
