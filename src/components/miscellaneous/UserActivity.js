import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April"],

  datasets: [
    {
      label: "Previous",
      data: [10, 12, 8, 13],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Current",
      data: [12, 9, 10, 19],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const UserActivity = () => {
  return (
    <Paper
      elevation={4}
      sx={{ p: 1.5, height: "100%", display: "flex", flexDirection: "column" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h2" fontWeight="bold" fontSize={14} gutterBottom>
          User Activity
        </Typography>

        <Button size="small" endIcon={<ExpandMore />}>
          Weekly
        </Button>
      </Box>

      <Typography
        component="h3"
        variant="caption"
        sx={{ opacity: 0.6 }}
        fontWeight="bold"
      >
        This Month
      </Typography>
      <Typography component="h3" variant="h6" fontWeight="bold" gutterBottom>
        12,123
      </Typography>
      <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Line data={data} />
      </Box>
    </Paper>
  );
};

export default UserActivity;
