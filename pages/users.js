import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserAdmin from "../components/usersComponent/userAdmin";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import UserAssociation from "../components/usersComponent/userAssociation";
import UserDonnateur from "../components/usersComponent/userDonnateur";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Users() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label={
                <Typography
                  style={{ textTransform: "capitalize"}}
                >
                  Admin
                </Typography>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <Typography
                  style={{ textTransform: "capitalize"}}
                >
                  Association
                </Typography>
              }
              {...a11yProps(1)}
            />
            <Tab
              label={
                <Typography
                  style={{ textTransform: "capitalize"}}
                >
                  Donnateur
                </Typography>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <UserAdmin />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <UserAssociation />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <UserDonnateur />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Paper>
  );
}
