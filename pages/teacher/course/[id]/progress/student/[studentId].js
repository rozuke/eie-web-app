import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {
  Headphones,
  BorderColor,
  ImportContacts,
  TrendingUp,
} from "@mui/icons-material";
import ProgressCard from "../../../../../../components/teacher/card/progressCard";
import Layout from "../../../../../../components/teacher/Layout";
import { StudentBar } from "../../../../../../components/teacher/dashboard/studentBar";
import { StudentCircle } from "../../../../../../components/teacher/dashboard/studentCircle";
import { useCourse } from "../../../../../../context/courseContext";
import { getSession } from "next-auth/react";
import TeacherService from "../../../../../../service/teacherService";

const StudentProgress = ({ progressResult }) => {
  const { progress } = useCourse();
  const successData = [
    progressResult.homework.correcto,
    progressResult.evaluationE.correcto,
    progressResult.laboratory.correcto,
  ];
  const faulsData = [
    progressResult.homework.incorrecto,
    progressResult.evaluationE.incorrecto,
    progressResult.laboratory.incorrecto,
  ];

  return (
    <Layout>
      <Container maxWidth={false}>
        <Typography variant="h5" component="div" pb={2}>
          {progress.nombre}
        </Typography>
        <Grid container spacing={3}>
          <Grid item md={3} sm={6} xs={12}>
            <ProgressCard
              title="Homework"
              note={progress.notaHomework}
              icon={<BorderColor />}
              color="#FF006E"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ProgressCard
              title="Evaluation E."
              note={progress.notaEE}
              icon={<ImportContacts />}
              color="#FB5607"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ProgressCard
              title="Laboratory"
              note={progress.notaLaboratory}
              icon={<Headphones />}
              color="#3A86FF"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <ProgressCard
              title="Participations"
              note={progress.totalParticipaciones}
              icon={<TrendingUp />}
              color="#C11CAD"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <StudentCircle
              success={progressResult.homework.porcentajeCorrecto}
              failure={progressResult.homework.porcentajeIncorrecto}
              color="#FF006E"
              title="Homework Participations"
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <StudentCircle
              success={progressResult.evaluationE.porcentajeCorrecto}
              failure={progressResult.evaluationE.porcentajeIncorrecto}
              color="#FB5607"
              title="Evaluation E."
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <StudentCircle
              success={progressResult.laboratory.porcentajeCorrecto}
              failure={progressResult.laboratory.porcentajeIncorrecto}
              color="#3A86FF"
              title="Laboratory"
            />
          </Grid>
          <Grid item xs={12}>
            <StudentBar success={successData} fauls={faulsData} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { studentId } = ctx.query;
  let progressResult;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  if (session) {
    progressResult = await TeacherService.getProgresStudent(studentId);
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
      progressResult,
    },
  };
};

export default StudentProgress;
