import { Container, Grid } from "@mui/material";
import ActivitiesTable from "./components/ActivitiesTable";
import Layout from "./components/Layout";

const Review = () => {
  return (
    <Layout>
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid height={500} item lg={10} md={12} xl={9} xs={12}>
            <ActivitiesTable />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default Review;
