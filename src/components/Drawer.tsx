/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SaveAsSharpIcon from "@mui/icons-material/SaveAsSharp";
import BookIcon from "@mui/icons-material/Book";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
interface ICON {
  name: string;
  icon: any;
  Drop?: any;
}

const DrawerDashboard = () => {
  const FistIcon = [
    {
      name: "Dashboard",
      icon: <DashboardOutlinedIcon sx={{ color: "#fff" }} />,
    },
    {
      name: "Publication",
      icon: <BookIcon />,
      Drop: <KeyboardArrowDownOutlinedIcon />,
    },
    {
      name: "Drafts",
      icon: <SaveAsSharpIcon />,
      Drop: <KeyboardArrowDownOutlinedIcon />,
    },
  ] as ICON[];
  const SecondIcon = [
    { name: "Analytics", icon: <AnalyticsIcon /> },
    {
      name: "Community",
      icon: <Diversity3Icon />,
      Drop: <KeyboardArrowDownOutlinedIcon />,
    },
    { name: "Resources", icon: <LibraryBooksIcon /> },
  ] as ICON[];
  return (
    <Box sx={{ marginTop: 10 }}>
      <List>
        {FistIcon.map((text, index) => (
          <Box sx={{ padding: "0 1rem" }} key={text.name}>
            <ListItem
              disablePadding
              sx={{
                backgroundColor: index === 0 ? "#6F6F6F" : "",
                color: index === 0 ? "#fff" : "#000",
                marginTop: 2,
              }}
            >
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={text.name}
                />
                <ListItemIcon sx={{ display: { xs: "none", md: "block" } }}>
                  {text.Drop && text.Drop}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider variant="middle" />
      <List>
        {SecondIcon.map((text) => (
          <Box sx={{ padding: "0 1rem" }} key={text.name}>
            <ListItem key={text.name} disablePadding sx={{ marginTop: 2 }}>
              <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText
                  sx={{ display: { xs: "none", md: "block" } }}
                  primary={text.name}
                />
                <ListItemIcon sx={{ display: { xs: "none", md: "block" } }}>
                  {text.Drop && text.Drop}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
      <Divider variant="middle" />
    </Box>
  );
};

export default DrawerDashboard;
