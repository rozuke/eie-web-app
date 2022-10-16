import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { getSession } from "next-auth/react";
import React from "react";
import CardStudent from "../../../../../components/teacher/card/CardStudent";
import CardTotal from "../../../../../components/teacher/card/CardTotal";
import Layout from "../../../../../components/teacher/Layout";
import StudentTable from "../../../../../components/teacher/StudentTable";
import TeacherService from "../../../../../service/teacherService";

const Progress = ({ ustudentsResults }) => {
  const total = ustudentsResults.length;
  console.log(ustudentsResults);
  const maxParticipation = ustudentsResults.reduce(
    (max, student) =>
      max > student.totalParticipaciones ? max : student.totalParticipaciones,
    0
  );
  console.log(maxParticipation);

  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CardStudent max={maxParticipation} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CardTotal total={total} />
          </Grid>
          <Grid item xs={12}>
            {ustudentsResults && (
              <StudentTable ustudentsResults={ustudentsResults} />
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  let ustudentsResults;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (session) {
    ustudentsResults = await TeacherService.getStudentsResultsByCourse(
      ctx.query.id
    );
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
      ustudentsResults,
    },
  };
};

export default Progress;
