import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { LibraryBooks } from "@mui/icons-material";

export const TotatlCourses = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Created courses
          </Typography>
          <Typography color="textPrimary" variant="h4">
            11
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#3A86FF",
              height: 56,
              width: 56,
            }}
          >
            <LibraryBooks />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
