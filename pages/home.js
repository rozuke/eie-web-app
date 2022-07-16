import { Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Appbar from "./components/Appbar";
import CourseCard from "./components/CourseCard";
const Home = () => {
  return (
    <>
      <Appbar />

      <Grid justifyContent={"flex-start"} container mt={2} spacing={3}>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={3}>
          <CourseCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
