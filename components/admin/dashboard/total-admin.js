import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const TotalAdmin = ({ admins }) => (
  <Card sx={{ height: "100%" }}>
    <CardContent>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color="textSecondary" gutterBottom variant="overline">
            Register admins
          </Typography>
          <Typography color="textPrimary" variant="h4">
            {admins}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: "#FD8A09",
              height: 56,
              width: 56,
            }}
          >
            <AdminPanelSettingsIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
