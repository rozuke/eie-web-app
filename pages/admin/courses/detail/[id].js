import Head from "next/head";
import { Box, Button, Container, Typography } from "@mui/material";
import { CourseListToolbar } from "../../../../components/admin/course/course-list-toolbar";
import { CourseListDetail } from "../../../../components/admin/course/course-list-detail";
import { DashboardLayout } from "../../../../components/admin/dashboard-layout";
import { getSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCourse } from "../../../../context/courseContext";
import SearchBar from "../../../../components/admin/search-bar";

const CourseDetail = ({ users }) => {
  const { course } = useCourse();
  const router = useRouter();
  const [userTable, setUserTable] = useState([]);

  useEffect(() => {
    setUserTable(users);
  }, [userTable]);

  return (
    <DashboardLayout>
      <Head>
        <title>Course Detail | EIE </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: -1,
            }}
          >
            <Typography sx={{ m: 1 }} variant="h4">
              {router.query.id && course.nombre}
            </Typography>
          </Box>
          <SearchBar />
          <Box sx={{ mt: 3, height: 400, boxShadow: 3, borderRadius: 2 }}>
            <CourseListDetail users={users} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const { id } = ctx.query;
  const users = await axios.get(
    `https://qnnijeqn9g.execute-api.sa-east-1.amazonaws.com/api/course/${id}/users`
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
      users: users.data,
      courseId: id,
    },
  };
};
export default CourseDetail;
