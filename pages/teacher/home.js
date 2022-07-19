import { Grid, Stack } from "@mui/material";
import React from "react";
import Appbar from "../../components/teacher/Appbar";
import CourseCard from "../../components/teacher/card/CourseCard";
const Home = () => {
  return (
    <>
      <Appbar />

      <Grid
        justifyContent={"flex-start"}
        container
        sx={{ margin: "0 auto" }}
        mt={2}
        spacing={3}
        alignItems={"center"}
      >
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <CourseCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
