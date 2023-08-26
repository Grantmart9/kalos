import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { About } from "pages/About";
import { Specials } from "pages/Specials";
import { Contact } from "pages/Contact";
import { Products } from "pages/Products";
import { Cart } from "pages/Cart";
import { Login } from "pages/Login";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/feutures";
import { Size } from "pages/media-query";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const menuItems = [
  { name: "Products", path: "/products" },
  { name: "Specials", path: "/specials" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const TopBar = ({ handleBurger, handleCart, handleLogin }) => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: layoutColor }}>
        <Toolbar>
          <Button
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleBurger}
          >
            <MenuIcon className="text-gray-500" />
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: pageHeading, flexGrow: 1, fontFamily: fontType }}
          >
            <div className="flex text-md align-center justify-center">
              KALOS
            </div>
          </Typography>
          <Button onClick={handleLogin} sx={{ marginRight: "2px" }}>
            <Link to={"/login"}>
              <div style={{ fontFamily: fontType }} className="text-gray-500 ">
                Login
              </div>
            </Link>
          </Button>
          <Button onClick={handleCart}>
            <Link to={"/cart"}>
              <ShoppingBasketIcon
                sx={{
                  color: "gray",
                  alignContent: "bottom",
                  justify: "center",
                  marginBottom: "0.5%",
                }}
              />
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

const ScreenLayoutInner = () => {
  return (
    <div
      style={{ backgroundColor: layoutColor, fontFamily: fontType }}
      className="rounded shadow-md h-fit w-screen p-2 mt-1 ml-1"
    >
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/specials">
          <Specials />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

const SmallScreenLayout = ({
  handleCart,
  handleLogin,
  handleBurger,
  handleClick,
  open,
}) => {
  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
      />
      {open ? (
        <SideNavSmall handleClick={handleClick} />
      ) : (
        <ScreenLayoutInner />
      )}
    </div>
  );
};
const BigScreenLayout = ({
  handleCart,
  handleLogin,
  handleBurger,
  handleClick,
  open,
}) => {
  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
      />
      <div className="flex">
        {open ? <SideNavBig handleClick={handleClick} /> : null}
        <ScreenLayoutInner />
      </div>
    </div>
  );
};

const SideNavInner = ({ handleClick }) => {
  return (
    <div className="grid grid-rows-4 gap-2 p-2 mt-5">
      {menuItems.map((item) => (
        <Button
          onClick={handleClick}
          size="large"
          sx={{
            color: buttonColor,
          }}
        >
          <Link to={item.path}>
            <div clasName="text-md font-bold">{item.name}</div>
          </Link>
        </Button>
      ))}
    </div>
  );
};

const SideNavBig = ({ handleClick }) => {
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor, minWidth: "300px" }}
        className="rounded shadow-md mt-1"
      >
        <div className="flex align-center justify-center">
          <SideNavInner handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

const SideNavSmall = ({ handleClick }) => {
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor }}
        className="rounded shadow-md mt-1 w-screen h-screen"
      >
        <div className="flex align-center justify-center">
          <div
            style={{ backgroundColor: layoutColor,width:"100%"}}
            className="h-screen rounded shadow-md mt-1"
          >
            <div className="flex align-center justify-center">
              <SideNavInner handleClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Home = () => {
  const [open, setOpen] = useState(true);
  const ScreenSize = Size();

  const handleLogin = () => {
    setOpen(false);
  };
  const handleCart = () => {
    setOpen(false);
  };
  const handleBurger = () => {
    setOpen(!open);
  };
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <div>
      {ScreenSize == "SM" || ScreenSize == "XS" ? (
        <SmallScreenLayout
          handleCart={handleCart}
          handleLogin={handleLogin}
          handleBurger={handleBurger}
          handleClick={handleClick}
          open={open}
        />
      ) : (
        <BigScreenLayout
          handleCart={handleCart}
          handleLogin={handleLogin}
          handleBurger={handleBurger}
          handleClick={handleClick}
          open={open}
        />
      )}
    </div>
  );
};
