import { Grid } from "@mui/material";
import { getSession } from "next-auth/react";
import ActivityCard from "../../../../../components/teacher/card/ActivityCard";
import Layout from "../../../../../components/teacher/Layout";

const Activities = ({ courseId }) => {
  return (
    <Layout>
      <Grid justifyContent={"flex-start"} container mt={2} spacing={3}>
        <Grid item xs={3}>
          <ActivityCard courseId={courseId} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { id } = ctx.query;

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (session) {
    if (session.rolId !== 2) {
      return {
        redirect: {
          destination: "/admin",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {
      courseId: id,
    },
  };
};
export default Activities;
