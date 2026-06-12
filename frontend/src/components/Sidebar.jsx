import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import {
  Link
} from "react-router-dom";

function Sidebar() {

  return (

    <Drawer
      variant="permanent"
      sx={{
        width:220,
        flexShrink:0,
        "& .MuiDrawer-paper": {
          width:220,
          boxSizing:"border-box"
        }
      }}
    >

      <List>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/dashboard"
          >
            <ListItemText
              primary="Dashboard"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/assets"
          >
            <ListItemText
              primary="Assets"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/bookings"
          >
            <ListItemText
              primary="Bookings"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/maintenance"
          >
            <ListItemText
              primary="Maintenance"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/audit-logs"
          >
            <ListItemText
              primary="Audit Logs"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/admin/qr-scanner"
          >
            <ListItemText
              primary="QR Scanner"
            />
          </ListItemButton>
        </ListItem>

      </List>

    </Drawer>

  );
}

export default Sidebar;