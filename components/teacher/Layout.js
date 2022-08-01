import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListOption from "./ListOption";
import { Add, Group, FormatListNumbered } from "@mui/icons-material";
import Image from "next/image";
import eieLogo from "../../public/image/eie-logo.png";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { NavItem } from "../nav-item";
import { DashboardNavbar } from "../admin/dashboard-navbar";
import { padding } from "@mui/system";
import Link from "next/link";
import { useCourse } from "../../context/courseContext";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Layout({ children }) {
  const { course } = useCourse();

  const router = useRouter();
  const items = [
    {
      href: `/teacher/course/${router.query.id}/activities`,
      icon: <Add fontSize="small" />,
      title: "New Activity",
    },
    {
      href: `/teacher/course/${router.query.id}/progress`,
      icon: <Group fontSize="small" />,
      title: "Student ALC notes",
    },
    {
      href: `/teacher/course/${router.query.id}/review`,
      icon: <FormatListNumbered fontSize="small" />,
      title: "Review activities",
    },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { status, data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="text" href="/teacher">
            <Image src={eieLogo} width="40" height="40" />
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {course && course.nombre}
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", flexFlow: "column" }}>
            <Typography variant="body2">
              {status === "authenticated" &&
                `${session.persona.nombre} ${session.persona.apellidoPaterno} ${session.persona.apellidoMaterno}`}
            </Typography>
            <Typography variant="caption">Teacher</Typography>
          </Box>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              sx={{
                height: 40,
                width: 40,
                ml: 1,
              }}
            >
              <img
                style={{ width: "40px", height: "40px" }}
                referrerPolicy="no-referrer"
                src={status === "authenticated" && session.user.image}
                alt="ADM"
              />
            </Avatar>
          </IconButton>
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
            <MenuItem onClick={handleCloseUserMenu}>
              <Button variant="text" color="menu" onClick={() => signOut()}>
                Logout
              </Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box sx={{ flexGrow: 1, paddingTop: "20px" }}>
          {items.map((item, index) => (
            <Link href={item.href} passHref key={index}>
              <Button
                startIcon={item.icon}
                disableRipple
                sx={{
                  textTransform: "none",
                  color: "#2D3748",
                  width: "100%",
                  justifyContent: "flex-start",
                  px: 3,
                  py: 1,
                }}
              >
                {item.title}
              </Button>
            </Link>
          ))}
        </Box>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
}
