import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { About } from "UserPages/About";
import { Contact } from "UserPages/Contact";
import { Products } from "UserPages/Products";
import { Cart } from "SecuredPages/Cart";
import { Login } from "UserPages/Login";
import { Register } from "UserPages/Register";
import Loading from "images/Loading.gif";
import {
  buttonColor,
  layoutColor,
  fontType,
} from "components/DisplaySettings/feutures";
import { TopBar } from "components/DisplaySettings/TopBar";
import Cookies from "universal-cookie";
const cookies = new Cookies();

/*This needs to be */
const menuItems = [
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const RegisteredMenuItems = [
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Orders", path: "/orders" },
  { name: "User settings", path: "/usersettings" },
];
const ManagerMenueItems = [
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Orders", path: "/orders" },
  { name: "Projections", path: "/projections" },
];

const SideNavInner = ({ handleClick }) => {
  return (
    <div className="grid grid-rows-4 gap-2 p-2 mt-5">
      {RegisteredMenuItems.map((item) => (
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

export const BigScreenLayout = ({
  handleCart,
  handleLogin,
  handleBurger,
  handleClick,
  open,
}) => {
  const [Token_avail, setToken_avail] = useState(menuItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
    console.log(loading)
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    const JWT = cookies.get("Token");
    setToken_avail(JWT);
    setLoading(!loading);
    console.log(loading)
  }, []);

  console.log(loading)

  
  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
      />
      <div className="flex" style={{ marginTop: "5rem" }}>
        {open ? <SideNavBig handleClick={handleClick} /> : null}
        <ScreenLayoutInner />
      </div>
    </div>
  );
};
