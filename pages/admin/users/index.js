import Head from "next/head";
import { Box, Card, CardContent, Container } from "@mui/material";
import { UserListResults } from "../../../components/admin/user/user-list-results";
import { UserListToolbar } from "../../../components/admin/user/user-list-toolbar";
import { DashboardLayout } from "../../../components/admin/dashboard-layout";
import { getSession } from "next-auth/react";
import axios from "axios";
const Users = ({ users }) => (
  <DashboardLayout>
    <Head>
      <title>Users | EIE</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ mt: 3, height: 400, boxShadow: 3, borderRadius: 2 }}>
          <UserListResults users={users} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const users = await axios.get(
    "https://mwb03srtpc.execute-api.sa-east-1.amazonaws.com/api/users"
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
      users: users.data,
    },
  };
};

export default Users;
