import {
  AppBar,
  Box,
  Menu,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Tooltip,
  Avatar,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";

import AccountMenu from "./DropDown";

const Navbar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            ml: 5,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".1rem",

            textDecoration: "none",
            color: "#000",
          }}
        >
          Logo
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            color: "#000",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={false}
            onClose={undefined}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          ></Menu>
        </Box>
        <Box sx={{ backgroundColor: "#FCFCFD ", textAlign: "start" }}>
          <Button
            variant="outlined"
            sx={{
              padding: "6px 5rem",
              color: "#98A2B3",
              border: "1px solid #E4E7EC",
              textAlign: "start",
            }}
            endIcon={
              <SearchSharpIcon
                sx={{ display: "flex", justifyContent: "flex-end" }}
              />
            }
          >
            Search
          </Button>
        </Box>
        <Box sx={{ flexGrow: 0, marginRight: 4 }}>
          <Tooltip
            title="Open settings"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton
                sx={{
                  p: { xs: "0px", md: 2 },
                }}
              >
                <NotificationsSharpIcon sx={{ p: { xs: "2px", md: 0 } }} />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/2.jpg"
                  sx={{ display: { md: "flex", xs: "none" } }}
                />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  color: "#667085",
                  font: "Montserrat",
                  display: { xs: "none", md: "block" },
                }}
              >
                Admin
              </Typography>
              <AccountMenu />
            </Box>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={false}
            onClose={undefined}
          ></Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
