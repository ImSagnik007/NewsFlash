import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Business from "./NavbarComponents/Business";

const Navbar = () => {
  const [tabValue, setTabValue] = useState("Business");
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
