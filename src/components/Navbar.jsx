import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Business from "./NavbarComponents/Business";
import Entertainment from "./NavbarComponents/Entertainment";

const API_KEY = "58a6e0b58a6243b8900dc02ef32c8d03";
const Navbar = ({ selectedTab, setSelectedTab }) => {
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
            <Tab label="Business" onClick={() => setSelectedTab("Business")} />
            <Tab
              label="Entertainment"
              onClick={() => setSelectedTab("Entertainment")}
            />
            <Tab label="General" onClick={() => setSelectedTab("General")} />
            <Tab label="Health" onClick={() => setSelectedTab("Health")} />
            <Tab label="Science" onClick={() => setSelectedTab("Science")} />
            <Tab label="Sports" onClick={() => setSelectedTab("Sports")} />
            <Tab
              label="Technology"
              onClick={() => setSelectedTab("Technology")}
            />
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
