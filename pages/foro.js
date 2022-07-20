import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CommentCard from "./components/CommentCard";
import Layout from "./components/Layout";

const Foro = () => {
  return (
    <Layout>
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid item xs={10}>
          <Typography variant="h4" component="div">
            Firs Topic
          </Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="h6" color={"primary"} component="div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <CommentCard />
        </Grid>
        <Grid item xs={6}>
          <CommentCard />
        </Grid>
        <Grid item xs={6}>
          <CommentCard />
        </Grid>
        <Grid item xs={6}>
          <CommentCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Foro;
