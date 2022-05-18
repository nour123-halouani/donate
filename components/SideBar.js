import * as React from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import GroupIcon from '@mui/icons-material/Group';
import {
  Drawer,
  DrawerHeader,
  useStyles,
} from "../styled-components/StyledSideBar";

export default function SideBar({ open, onToggle }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      variant="permanent"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={onToggle}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List>
        <ListItem disablePadding>
          <Link href="/">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: 25 }} />
              </ListItemIcon>
              <ListItemText
                secondary={
                  <>
                    <Typography
                      variant="subtitle1"
                      className={classes.sideBarLabel}
                    >
                      Accueil
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="/users">
            <ListItemButton>
              <ListItemIcon>
                <GroupIcon sx={{ fontSize: 25 }} />
              </ListItemIcon>
              <ListItemText
                secondary={
                  <>
                    <Typography
                      variant="subtitle1"
                      className={classes.sideBarLabel}
                    >
                      Utilisateurs
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link href="produits">
            <ListItemButton>
              <ListItemIcon>
                <Inventory2Icon sx={{ fontSize: 25 }} />
              </ListItemIcon>
              <ListItemText
                secondary={
                  <>
                    <Typography
                      variant="subtitle1"
                      className={classes.sideBarLabel}
                    >
                      Produits
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
