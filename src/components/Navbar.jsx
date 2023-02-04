import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Business from "./NavbarComponents/Business";
import Entertainment from "./NavbarComponents/Entertainment";

import axios from "axios";

const API_KEY = "58a6e0b58a6243b8900dc02ef32c8d03";
const Navbar = ({ updateNews }) => {
  return (
    <div>
      <AppBar
        sx={{
          background: "linear-gradient(to right bottom, #22879c, #47b389)",
        }}
      >
        <Toolbar>
          <NewspaperIcon />
          <Typography variant="h5">NewsFlash</Typography>
          <Tabs textColor="inherit" sx={{ marginLeft: "auto" }}>
            <Tab label="Business" />
            <Tab label="Entertainment" />
            <Tab label="General" />
            <Tab label="Health" />
            <Tab label="Science" />
            <Tab label="Sports" />
            <Tab label="Technology" />
          </Tabs>

          <Button sx={{ marginLeft: "auto" }} variant="contained">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
