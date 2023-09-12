import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState } from "react";
import { Size } from "media-query";
import { SmallScreenLayout } from "components/DisplaySettings/SmallScreenLayout";
import { BigScreenLayout } from "components/DisplaySettings/BigScreenLayout";
import { API_IP } from "components/API/API";

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

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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