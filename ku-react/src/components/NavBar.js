import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import StoreSharpIcon from "@mui/icons-material/StoreSharp";
import AutoStoriesSharpIcon from "@mui/icons-material/AutoStoriesSharp";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ThemeSwitch from "./ThemeSwitch";
import { AppContext } from "../context/AppContext";
import getRandomInt from "../helpers";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import RegLink from "@mui/material/Link";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { user, cart } = useContext(AppContext);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ mr: 3 }}>
            <Link to="/">
              <img
                height="45px"
                alt="book logo"
                className="p2"
                src="https://res.cloudinary.com/ddi2tydzs/image/upload/v1653536173/book_ajqw46.jpg"
              />
            </Link>
          </Box>
          <Typography sx={{ flexGrow: 1 }} variant="h6" noWrap component="div">
            Book Store
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.first_name ?? "Please Login"}
                  src={
                    user?.icon
                      ? `https://avatars.dicebear.com/api/avataaars/${user.icon}.svg`
                      : `https://avatars.dicebear.com/api/avataaars/${getRandomInt(
                          0,
                          1000
                        )}.svg`
                  }
                />
              </IconButton>
            </Tooltip>
            {/* <h3>{user.first_name}</h3> */}

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {user.first_name? <section>
                <MenuItem >
                  <Typography textAlign="center">
                    <Link
                      to="/RegisterEdit"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Register/Edit Profile
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      to="/logout"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Logout
                    </Link>
                  </Typography>
                </MenuItem>
                </section>
               : 
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Login
                    </Link>
                  </Typography>
                </MenuItem>
              }
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { label: "Home", path: "/", icon: <HomeSharpIcon /> },
            { label: "Book Store", path: "/Browse", icon: <StoreSharpIcon /> },
            {
              label: "Reading List",
              path: "/ReadingList",
              icon: (
                <Badge badgeContent={cart?.length}>
                  <AutoStoriesSharpIcon />
                </Badge>
              ),
            },
          ].map((navItem, index) => (
            <ListItem
              key={navItem.label}
              disablePadding
              sx={{ display: "block", ml: 2, mb: 2 }}
            >
              <Link
                to={navItem.path}
                style={{
                  display: "flex",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {navItem.icon}
                </ListItemIcon>
                <ListItemText
                  primary={navItem.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </Link>
            </ListItem>
          ))}
          <ListItem button key={"Social"}>
            <RegLink
              href="https://www.youtube.com/watch?v=qi1HpjsKjUI"
              color="inherit"
              underline="none"
              sx={{ display: "flex" }}
            >
              <ListItemIcon>
                <ConnectWithoutContactIcon />
              </ListItemIcon>
              <ListItemText primary={"Social"} />
            </RegLink>
          </ListItem>
        </List>
        {open ? (
          <ListItem
            sx={{
              position: "absolute",
              bottom: "0px",
              justifyContent: "center",
            }}
          >
            <ThemeSwitch />
          </ListItem>
        ) : (
          ""
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
