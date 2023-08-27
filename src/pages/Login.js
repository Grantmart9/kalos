import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/feutures";
import { Size } from "pages/media-query";
import Cookies from "universal-cookie";
import Loading from "images/Loading.gif";
const cookies = new Cookies();
const axios = require("axios");

export const Login = () => {
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const size = Size();

  const handleUserNameInput = (e) => {
    setUser_name(e.target.value);
  };
  const handleUserPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePost = () => {
    setLoading(true);
    axios
      .post("http://54.152.141.39:5000/auth", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
        },
      })
      .then(function (response) {
        cookies.set("Token", response.data.JWT, { path: "/" });
        console.log(cookies.get("Token"));
        setLoading(false);
      })
      .catch(function (error) {
        setError("Request Error !!!");
        setLoading(false);
      });
  };
  console.log(loading);

  if (loading) {
    return (
      <div
        style={{ color: pageHeading,marginTop:"32%" }}
        className="flex justify-center align-center"
      >
        <div className="grid grid-rows-2">
          <img src={Loading} />
          Loging in as: {user_name}
        </div>
      </div>
    );
  }
  if (error) {
    <div>error</div>;
  }

  return (
    <div
      style={{ color: pageHeading, marginTop: "10%" }}
      className="flex justify-center"
    >
      <div className="flex rounded shadow-md p-10">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, maxWidth: "25ch" },
          }}
          noValidate
          autoComplete="on"
        >
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handleUserNameInput}
              sucess
              id="outlined-error-helper-text"
              label="Username"
              helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handleUserPasswordInput}
              sucess
              id="outlined-error-helper-text"
              label="Password"
              helperText="Incorrect entry."
            />
          </div>
          {size == "MD" || size == "SM" || size == "XS" ? (
            <div className="grid grid-rows-2">
              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                onClick={handlePost}
                size="small"
              >
                Login
              </Button>

              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                size="small"
              >
                <Link to={"/register"}>
                  <div clasName="text-md font-bold">Register</div>
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2">
              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                size="small"
                onClick={handlePost}
              >
                Login
              </Button>
              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                size="small"
              >
                <Link to={"/register"}>
                  <div clasName="text-md font-bold">Register</div>
                </Link>
              </Button>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};
