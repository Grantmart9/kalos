import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import { About } from "UserPages/About";
import { Contact } from "UserPages/Contact";
import { Products } from "UserPages/Products";
import { Cart } from "UserSecuredPages/Cart";
import { Login } from "UserPages/Login";
import { Register } from "UserPages/Register";
import { Settings } from "UserSecuredPages/Settings";
import { Orders } from "UserSecuredPages/Orders";
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
  { name: "My Cart", path: "/cart" },
  { name: "settings", path: "/settings" },
];

const SideNavInner = ({ handleClick, jwt }) => {
  var Menu;
  console.log(jwt);
  if (jwt) {
    Menu = RegisteredMenuItems;
  }
   else {
    Menu = menuItems;
  }
  return (
    <div className="grid grid-rows-4 gap-2 p-2 mt-5">
      {Menu.map((item) => (
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

const SideNavBig = ({ handleClick, jwt }) => {
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor, minWidth: "300px" }}
        className="rounded shadow-md mt-1"
      >
        <div className="flex align-center justify-center">
          <SideNavInner handleClick={handleClick} jwt={jwt} />
        </div>
      </div>
    </>
  );
};

const ScreenLayoutInner = ({ setJWT }) => {
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
          <Login setJWT={setJWT} />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/settings">
          <Settings />
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
  var JWT_State = false;
  var jwt_avail = cookies.get("Token");
  if (jwt_avail != '') {
    JWT_State = true;
  } else {
    JWT_State = false;
  }
  const [jwt, setJWT] = useState(JWT_State);

  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
      />
      <div className="flex" style={{ marginTop: "5rem" }}>
        {open ? <SideNavBig handleClick={handleClick} jwt={jwt} /> : null}
        <ScreenLayoutInner setJWT={setJWT} />
      </div>
    </div>
  );
};
