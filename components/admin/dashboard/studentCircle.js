import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

export const StudentCircle = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [30, 15, 25, 30],
        backgroundColor: ["#FB5607", "#FF006E", "#8338EC", "#FFBE0B"],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Level I", "Level II", "Level III", "Level IV"],
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const devices = [
    {
      title: "Level I",
      value: 30,
      color: "#FB5607",
    },
    {
      title: "Level II",
      value: 15,
      color: "#FF006E",
    },
    {
      title: "Level III",
      value: 25,
      color: "#8338EC",
    },
    {
      title: "Level IV",
      value: 30,
      color: "#FFBE0B",
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Percentage of students" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {devices.map(({ color, title, value }) => (
            <Grid
              item
              xs={6}
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
