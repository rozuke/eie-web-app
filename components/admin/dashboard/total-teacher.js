import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export const TotalTeachers = ({ teachers }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Register teachers
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {teachers}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#9747FF",
              height: 56,
              width: 56,
            }}
          >
            <SchoolIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
