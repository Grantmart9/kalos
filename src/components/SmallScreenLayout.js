import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
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
import { TopBar } from "components/TopBar";

const menuItems = [
    { name: "Products", path: "/products" },
    { name: "Specials", path: "/specials" },
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
          className="rounded shadow-md mt-1"
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
          <SideNavSmall handleClick={handleClick} />
        ) : (
          <ScreenLayoutInner />
        )}
      </div>
    );
  };