import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { useState } from "react";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import { DrawerHeader } from "../styled-components/StyledSideBar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen(!open);
  }
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar onToggle={toggle} open={open} />
        <SideBar onToggle={toggle} open={open} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <main>{children}</main>
        </Box>
      </Box>
    </div>
  );
}
