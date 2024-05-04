import * as React from "react";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import NavBar from "./shared/NavBar";
import SideBar from "./shared/SideBar";
import DesignMode from "../themes/DesignMode";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const HomeDashboard = () => {
  const [open, setOpen] = React.useState(false);
  //#region Handlers
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  //#endregion

  const [mode, setMode] = React.useState(
    // Get the Current Mode from the Local Storage
    Boolean(localStorage.getItem("CurrentMode"))
      ? localStorage.getItem("CurrentMode")
      : "light"
  );
  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(DesignMode(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <NavBar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          setMode={setMode}
        />

        <SideBar open={open} handleDrawerClose={handleDrawerClose} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default HomeDashboard;
