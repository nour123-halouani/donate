import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "../styled-components/styledAppBar";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Avatar, Box, Button, Menu, Stack, Tooltip } from "@mui/material";

export default function Bar({ open, onToggle }) {
  const theme = useTheme();

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onToggle}
          edge="start"
          sx={{
            marginRight: "25px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Typography sx={{ flexGrow: 1 }} variant="h6">
          nom du site
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body1">nom d'admin</Typography>

          <Button color="secondary" variant="outlined" size="small">
            <Typography style={{ textTransform: "capitalize" }}>
              Logout
            </Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
