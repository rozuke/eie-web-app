import { Container, Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import ActivitiesTable from "../../../../../components/teacher/ActivitiesTable";
import Layout from "../../../../../components/teacher/Layout";
import TeacherService from "../../../../../service/teacherService";

const Review = ({ activities, courseId }) => {
  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ActivitiesTable activities={activities} courseId={courseId} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  let activities;

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    activities = await TeacherService.getAllActivitiesByCourse(ctx.query.id);
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
      activities,
      courseId: ctx.query.id,
    },
  };
};
export default Review;
