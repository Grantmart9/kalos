import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { About } from "UserPages/About";
import { Contact } from "UserPages/Contact";
import { Products } from "UserPages/Products";
import { Cart } from "SecuredPages/Cart";
import { Login } from "SecuredPages/Login";
import { Register } from "UserPages/Register";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/feutures";
import { TopBar } from "components/TopBar";

const menuItems = [
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

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

const SideNavSmall = ({ handleClick }) => {
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor, minWidth: "300px" }}
        className="rounded shadow-md mt-1 h-screen"
      >
        <div className="flex align-center justify-center">
          <SideNavInner handleClick={handleClick} />
        </div>
      </div>
    </>
  );
};

const ScreenLayoutInner = () => {
  return (
    <div
      style={{ backgroundColor: layoutColor, fontFamily: fontType }}
      className="rounded shadow-md h-screen w-screen p-2 mt-1 ml-1"
    >
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
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
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export const SmallScreenLayout = ({
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
        <div style={{ marginTop: "5rem" }}>
          <SideNavSmall handleClick={handleClick} />
        </div>
      ) : (
        <ScreenLayoutInner />
      )}
    </div>
  );
};
