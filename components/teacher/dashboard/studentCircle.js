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

export const StudentCircle = ({ success, failure, color, title }) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [success, failure],
        backgroundColor: [color, "#001D3D "],
        borderWidth: 8,
        borderColor: "#FFFFFF",
        hoverBorderColor: "#FFFFFF",
      },
    ],
    labels: ["Successes", "Fauls"],
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
      title: "Successes",
      value: success,
      color: color,
    },
    {
      title: "Fauls",
      value: failure,
      color: "#001D3D",
    },
  ];

  return (
    <Card>
      <CardHeader title={title} />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          {success && <Doughnut data={data} options={options} />}
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
