import { TrendingUp } from "@mui/icons-material";
import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CardStudent = (props) => {
  return (
    <Card sx={{ height: "100%" }} {...props}>
      <CardContent>
        <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom>
              Highest
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              participation
            </Typography>
            <Typography color="textPrimary" variant="h4">
              12
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
              <TrendingUp />
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
            Rodrigo Estiven Sulca Acosta
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardStudent;
