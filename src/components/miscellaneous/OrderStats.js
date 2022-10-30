import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Cancel", "Pending", "Completed"],
  datasets: [
    {
      label: "No. of Orders",
      data: [5, 19, 3],
      weight: 0.1,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(0, 200, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(0, 200, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const OrderStats = () => {
  return (
    <Paper elevation={4} sx={{ p: 1.5, height: "100%" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h2" fontWeight="bold" fontSize={14} gutterBottom>
          Order Stats
        </Typography>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Doughnut options={{ cutout: "70%", radius: "90%" }} data={data} />
    </Paper>
  );
};

export default OrderStats;
