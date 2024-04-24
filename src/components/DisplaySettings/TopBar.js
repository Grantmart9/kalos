import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from "@mui/icons-material/Menu";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/DisplaySettings/feutures";

const LoggedOut = ({ handleBurger, handleLogin }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: layoutColor }}>
      <Toolbar>
        <Button
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: buttonColor }}
          onClick={handleBurger}
        >
          <MenuIcon />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: pageHeading, flexGrow: 1, fontFamily: fontType }}
        >
          <div className="flex text-md align-center justify-center">καλός</div>
        </Typography>
        <Button onClick={handleLogin} sx={{ mr: 1, color: buttonColor }}>
          <Link to={"/login"}>
            <div
              style={{ fontFamily: fontType }}
              className="font-serif text-gray-500 "
            >
              Login
            </div>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const LoggedIn = ({ handleBurger, handleLogin }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: layoutColor }}>
      <Toolbar>
        <Button
          size="small"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: buttonColor }}
          onClick={handleBurger}
        >
          <MenuIcon />
        </Button>
        <Typography
          variant="h6"
          component="div"
          sx={{ color: pageHeading, flexGrow: 1, fontFamily: fontType }}
        >
          <div className="flex text-md align-center justify-center">καλός</div>
        </Typography>
        <Button sx={{ mr: 1, color: buttonColor }}>
          <Link to={"/login"}>
            <div
              style={{ fontFamily: fontType }}
              className="font-serif text-gray-500 "
            >
              Logout
            </div>
          </Link>
        </Button>
        <Button sx={{ mr: 1, color: buttonColor }}>
          <Link to={"/cart"}>
            <div
              style={{ fontFamily: fontType }}
              className="font-serif text-gray-500 "
            >
              <ShoppingBasketIcon />
            </div>
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export const TopBar = ({
  handleBurger,
  handleLogin,
  jwt_avail,
}) => {
  return (
    <>
      {jwt_avail ? (
        <LoggedIn handleBurger={handleBurger} handleLogin={handleLogin}  />
      ) : (
        <LoggedOut handleBurger={handleBurger} handleLogin={handleLogin}  />
      )}
    </>
  );
};
