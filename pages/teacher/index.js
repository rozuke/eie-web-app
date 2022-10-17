import { Grid, Stack } from "@mui/material";
import React from "react";
import Appbar from "../../components/teacher/Appbar";
import CourseCard from "../../components/teacher/card/CourseCard";
import { getSession } from "next-auth/react";
import TeacherService from "../../service/teacherService";
const Home = ({ courses }) => {
  return (
    <>
      <Appbar />

      <Grid
        justifyContent={"flex-start"}
        container
        sx={{ margin: "0 auto" }}
        mt={2}
        spacing={3}
        alignItems={"center"}
      >
        {courses &&
          courses.map((course) => (
            <Grid key={course.cursoId} item xs={6} sm={4} md={3}>
              <CourseCard course={course} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  let courses;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    courses = await TeacherService.getCourses(session.usuarioId);

    // if (session.rolId !== 2) {
    //   return {
    //     redirect: {
    //       destination: "/admin",
    //       permanent: false,
    //     },
    //   };
    // }
  }

  return {
    props: {
      courses,
    },
  };
};
export default Home;
