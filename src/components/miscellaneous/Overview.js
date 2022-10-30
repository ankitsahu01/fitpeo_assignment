import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { blue } from "@mui/material/colors";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: blue[500],
      borderColor: blue[600],
      borderWidth: 1,
      maxBarThickness: 15,
      hoverBackgroundColor: blue[800],
      hoverBorderColor: blue[900],
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const Overview = () => {
  return (
    <Paper elevation={4} sx={{ p: 1.5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="h2" fontWeight="bold" fontSize={14}>
          Overview
        </Typography>
        <Typography fontSize={12}>
          Sort By:
          <Button size="small" endIcon={<ExpandMore/>}>Yearly</Button>
        </Typography>
      </Box>
      <Grid container sx={{mt:1}}>
        <Grid item lg={4} xs={12}>
          <Typography
            component="h3"
            variant="caption"
            sx={{ opacity: 0.6 }}
            fontWeight="bold"
          >
            This Month
          </Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Typography component="h3" variant="h5" fontWeight="bold">
              $12,123
            </Typography>
            <Chip
              size="small"
              label="+ 2.15%"
              sx={{ bgcolor: "rgba(0,155,0, 0.1)", color: "green" }}
            />
          </Box>
          <Grid container p={2} sx={{ height: "90%" }} alignContent={"center"}>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderBottom: 1, borderColor: "rgba(0,0,0,0.2)" }}
            >
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Orders
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                1,234
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{
                borderBottom: 1,
                borderLeft: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Sales
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                1,234
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderBottom: 1, borderColor: "rgba(0,0,0,0.2)" }}
            >
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Order Value
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                11.11 %
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{
                borderBottom: 1,
                borderLeft: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Customes
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                11,234
              </Typography>
            </Grid>
            <Grid item xs={6} p={1}>
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Income
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                $334
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              p={1}
              sx={{ borderLeft: 1, borderColor: "rgba(0,0,0,0.2)" }}
            >
              <Typography
                component="h3"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Expenses
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                $80
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Box sx={{ maxWidth: "85vw" }}>
            <Bar data={data} />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Overview;
