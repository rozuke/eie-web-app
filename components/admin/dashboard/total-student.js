import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";

export const TotalStudents = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Register students
          </Typography>
          <Typography color="textPrimary" variant="h4">
            80
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#FF006E",
              height: 56,
              width: 56,
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          pt: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mr: 1,
          }}
        >
          10 students per course
        </Typography>
      </Box>
    </CardContent>
  </Card>
);
