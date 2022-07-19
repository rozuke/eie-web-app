import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChartOutlined";

export const TotalTeachers = () => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Register teachers
          </Typography>
          <Typography color="textPrimary" variant="h4">
            10
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
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
