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
import Grow from "@mui/material/Grow";
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
  { name: "Orders", path: "/orders" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Logout", path: "/login" },
];

const SideNavInner = ({ handleClick, jwt }) => {
  var Menu;
  if (jwt) {
    Menu = RegisteredMenuItems;
  } else {
    Menu = menuItems;
  }
  return (
    <div className="grid grid-rows-4 gap-2 p-2 mt-5">
      {Menu.map((item) => (
        <div className="flex align-center align-center">
          <Grow in={true} timeout={800}>
            <Link to={item.path}>
              <Button
                onClick={handleClick}
                size="medium"
                sx={{
                  color: buttonColor,
                }}
              >
                <div clasName="text-md font-bold">{item.name}</div>
              </Button>
            </Link>
          </Grow>
        </div>
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
      className="rounded shadow-md min-h-screen w-screen p-2 mt-1 ml-1"
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
  if (jwt_avail != "") {
    JWT_State = true;
  } else {
    JWT_State = false;
  }
  const [jwt, setJWT] = useState(JWT_State);

  const handleLogout = () => {
    cookies.set("Token", "", { path: "/" });
    cookies.set("User_id", "", { path: "/" });
    BigScreenLayout();
  };

  return (
    <div>
      <TopBar
        handleCart={handleCart}
        handleLogin={handleLogin}
        handleBurger={handleBurger}
        handleLogout={handleLogout}
        jwt_avail={JWT_State}
        setJWT={setJWT}
      />
      <div className="flex min-h-screen" style={{ marginTop: "5rem" }}>
        {open ? <SideNavBig handleClick={handleClick} jwt={jwt} /> : null}
        <ScreenLayoutInner setJWT={setJWT} />
      </div>
    </div>
  );
};
