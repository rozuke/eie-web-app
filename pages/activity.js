import { Grid } from "@mui/material";
import ActivityCard from "./components/ActivityCard";
import Appbar from "./components/Appbar";
import Layout from "./components/Layout";

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
