import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon, Account } from "@mui/icons-material";
import Image from "next/image";
import eieLogo from "../../public/image/eie-logo.png";

const Appbar = () => {
  return (
    <AppBar position="static" flexGrow="row">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Button variant="text">
          <Image src={eieLogo} width="40" height="40" />
        </Button>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EIE Riberalta
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
