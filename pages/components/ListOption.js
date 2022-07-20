import { Add, Group, FormatListNumbered } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

const ListOption = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="New Actiity" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="View progress student" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FormatListNumbered />
          </ListItemIcon>
          <ListItemText primary="Review Activities" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default ListOption;
