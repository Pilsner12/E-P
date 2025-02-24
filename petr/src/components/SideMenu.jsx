import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

export default function SideMenu() {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button={true}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button={true}>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button={true}></ListItem>
      </List>
    </Drawer>
  );
}
