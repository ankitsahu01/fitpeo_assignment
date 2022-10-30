import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChatIcon from "@mui/icons-material/Chat";
import ArticleIcon from "@mui/icons-material/Article";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import EmailIcon from "@mui/icons-material/Email";

const Sidebar = (props) => {
  const { ...other } = props;
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Drawer variant="permanent" {...other}>
      <Box sx={{ color: "rgba(255, 255, 255, 0.7)", height: "100%" }}>
        <Typography variant="h4" component="h1" p={1} gutterBottom>
          Logo
        </Typography>
        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "inherit",
                color: "inherit",
                opacity: 0.6,
                fontWeight: "bold",
              }}
            >
              MENU
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick} sx={{ color: "#fff" }}>
            <ListItemIcon sx={{ color: "inherit" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton selected onClick={props.onClose}>
                <ListItemText
                  primary="Ecommerce"
                  sx={{ pl: 7, color: "#fff" }}
                />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Saas" sx={{ pl: 7 }} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Crypto" sx={{ pl: 7 }} />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "inherit",
                color: "inherit",
                opacity: 0.6,
                fontWeight: "bold",
              }}
            >
              APPLICATIONS
            </ListSubheader>
          }
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
            <Badge badgeContent={4} color="primary" sx={{ mr: 2.2 }} />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="File Manager" />
            <Chip
              size="small"
              label="Hot"
              sx={{
                bgcolor: "rgb(255,20,147, 0.4)",
                color: "rgba(255,192,203)",
              }}
            />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <LocalMallIcon />
            </ListItemIcon>
            <ListItemText primary="Ecommerce" />
            <ExpandMore />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
            <ExpandMore />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
