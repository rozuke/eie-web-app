import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import MuiAppBar from "@mui/material/AppBar";
import eieLogo from "../../public/image/eie-logo.png";
import styled from "@emotion/styled";

const drawerWidth = 240;
const CustomAppBar = styled(MuiAppBar, {
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

const AppBar = () => {
  const router = useRouter();
  const { status, data: session } = useSession();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <CustomAppBar position="static" flexGrow="row">
      <Toolbar>
        <Button variant="text" onClick={() => router.push("/teacher")}>
          <Image src={eieLogo} width="40" height="40" />
        </Button>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EIE Riberalta
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
    </CustomAppBar>
  );
};

export default AppBar;
