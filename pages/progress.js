import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CardStudent from "./components/CardStudent";
import CardTotal from "./components/CardTotal";
import Layout from "./components/Layout";
import StudentTable from "./components/StudentTable";

const Progress = () => {
  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CardStudent />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <CardTotal />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <StudentTable />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Progress;
