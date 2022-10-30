import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { blue } from "@mui/material/colors";
import { Divider } from "@mui/material";

const listData = [
  {
    avatarName: "#1",
    primaryText: "Blue T-shirt",
    secondaryText: "$ 12.3",
    quantity: "1.12k",
  },
  {
    avatarName: "#2",
    primaryText: "Hoodie",
    secondaryText: "$ 12.4",
    quantity: "1.13k",
  },
  {
    avatarName: "#3",
    primaryText: "Red Cap",
    secondaryText: "$ 12.5",
    quantity: "1.14k",
  },
  {
    avatarName: "#4",
    primaryText: "Black T-shirt",
    secondaryText: "$ 12.6",
    quantity: "1.15k",
  },
];

const TopProducts = () => {
  return (
    <Paper elevation={4} sx={{ p: 1.5, height: "100%" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h2" fontWeight="bold" fontSize={14} gutterBottom>
          Top Products
        </Typography>

        <Button size="small" endIcon={<ExpandMore />}>
          Monthly
        </Button>
      </Box>
      <List disablePadding>
        {listData.map((item, index) => (
          <>
            <ListItem
              key={item.avatarName}
              disableGutters
              disablePadding
              sx={{ mt: 0.7 }}
              secondaryAction={<Chip size="small" label={item.quantity} />}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                  {item.avatarName}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span style={{ opacity: 0.8 }}>{item.primaryText}</span>
                }
                secondary={<strong>{item.secondaryText}</strong>}
              />
            </ListItem>
            {index === listData.length - 1 ? null : <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TopProducts;
