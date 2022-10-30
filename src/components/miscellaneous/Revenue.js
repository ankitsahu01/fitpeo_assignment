import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import { blue } from "@mui/material/colors";

const Revenue = () => {
  return (
    <Card sx={{ boxShadow: 4 }}>
      <CardActionArea>
        <CardContent>
          <Grid container columnSpacing={1.5} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                <StackedLineChartIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h2" fontSize={12}>
                Revenue
              </Typography>

              <Typography variant="h6" component="h2">
                $1,000
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignSelf: "end",
                ml: "auto",
              }}
            >
              <Chip
                size="small"
                label="+ 1.15%"
                sx={{ bgcolor: "rgba(0,155,0, 0.1)", color: "green" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Revenue;
