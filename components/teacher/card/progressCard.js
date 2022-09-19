import { TrendingUp } from "@mui/icons-material";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProgressCard = ({ title, note, icon, color }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography color="textPrimary" variant="h4">
              {note === null ? 0 : note}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: color,
                height: 56,
                width: 56,
              }}
            >
              {icon}
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            pt: 2,
            display: "flex",
            alignItems: "center",
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
