import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
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
import { useMd } from "media-query";
import { useMdscreen } from "media-query";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const menuItems = [
  { name: "Products", path: "/products" },
  { name: "Specials", path: "/specials" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const loginDialog = () => {
  console.log("login");
};

const TopBar = ({ handleClick }) => {
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
            onClick={handleClick}
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
          <Button onClick={loginDialog} sx={{ marginRight: "2px" }}>
            <Link to={"/login"}>
              <div style={{ fontFamily: fontType }} className="text-gray-500 ">
                Login
              </div>
            </Link>
          </Button>
          <Button>
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



const SideNav = ({handleClick}) => {
 
  return (
    <>
      <div
        style={{ backgroundColor: layoutColor, minWidth: "300px" }}
        className="rounded shadow-md mt-1"
      >
        <div className="flex align-center justify-center">
          <div className="grid grid-rows-4 gap-2 p-2 mt-5">
            {menuItems.map((item) => (
              <Button
              onClick = {handleClick}
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
        </div>
      </div>
    </>
  );
};

export const Home = () => {
  const [open, setOpen] = useState(true);
  const isMd = useMd();
  console.log(isMd);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router>
      <div>
        <TopBar handleClick={handleClick} />
        <div className="flex">
          {isMd ? (
            <div>
              {open ? <SideNav handleClick={handleClick}/> : null}
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
            </div>
          ) : (
            <div>
              {open ? <SideNav handleClick={handleClick} /> : null}
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
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};
