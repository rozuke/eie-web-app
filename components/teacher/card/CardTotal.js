import { Group } from "@mui/icons-material";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const CardTotal = (props) => {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom>
              Registered
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              students
            </Typography>
            <Typography color="textPrimary" variant="h4">
              15
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "#FB5607",
                height: 56,
                width: 56,
              }}
            >
              <Group />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <ArrowDownwardIcon color="error" /> */}
          <Typography
            sx={{
              mr: 1,
            }}
            variant="body2"
          >
            Course Level I
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardTotal;
