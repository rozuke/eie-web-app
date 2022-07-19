import { Grid } from "@mui/material";
import ActivityCard from "../../components/teacher/card/ActivityCard";
import Layout from "../../components/teacher/Layout";

const Activity = () => {
  return (
    <Layout>
      <Grid justifyContent={"flex-start"} container mt={2} spacing={3}>
        <Grid item xs={3}>
          <ActivityCard />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Activity;
