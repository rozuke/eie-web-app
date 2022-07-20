import Head from "next/head";
import { Box, Card, CardContent, Container } from "@mui/material";
import { UserListResults } from "../../components/admin/user/user-list-results";
import { UserListToolbar } from "../../components/admin/user/user-list-toolbar";
import { DashboardLayout } from "../../components/admin/dashboard-layout";

const Customers = () => (
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
          <UserListResults />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);

export default Customers;
