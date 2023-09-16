import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import { Size } from "media-query";
import { SmallScreenLayout } from "components/DisplaySettings/SmallScreenLayout";
import { BigScreenLayout } from "components/DisplaySettings/BigScreenLayout";
import { API_IP } from "components/API/API";
import Cookies from "universal-cookie";
const cookies = new Cookies();

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
  const handleClickLarge = () => {
    setOpen(true);
  };
  const handleClickSmall = () => {
    setOpen(!open);
  };

  return (
    <div>
      {ScreenSize == "SM" || ScreenSize == "XS" ? (
        <SmallScreenLayout
          handleCart={handleCart}
          handleLogin={handleLogin}
          handleBurger={handleBurger}
          handleClick={handleClickSmall}
          open={open}
        />
      ) : (
        <BigScreenLayout
          handleCart={handleCart}
          handleLogin={handleLogin}
          handleBurger={handleBurger}
          handleClick={handleClickLarge}
          open={open}
        />
      )}
    </div>
  );
};
