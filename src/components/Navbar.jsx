import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Avatar,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import "firebase/auth";

const API_KEY = "58a6e0b58a6243b8900dc02ef32c8d03";
const Navbar = ({ selectedTab, setSelectedTab }) => {
  const reloadPage = () => {
    window.location.reload();
  };
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
        localStorage.setItem("user", JSON.stringify(result.user));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <AppBar
        sx={{
          background: "linear-gradient(to right bottom, #22879c, #47b389)",
        }}
      >
        <Toolbar>
          <NewspaperIcon />
          <Typography
            variant="h5"
            sx={{
              cursor: "pointer",
            }}
            onClick={reloadPage}
          >
            <a href="#">NewsFlash</a>
          </Typography>

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

          {user ? (
            <>
              <Avatar
                sx={{ marginLeft: "auto" }}
                alt="User Photo"
                src={user.photoURL}
              />
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                onClick={signOut}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              sx={{ marginLeft: "auto" }}
              variant="contained"
              onClick={signInWithGoogle}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
