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
} from "components/DisplaySettings/feutures";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import { API_IP } from "components/API/API";

const cookies = new Cookies();
const axios = require("axios");

export const Login = () => {
  /*State change variables*/
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  /*function variables */
  const [loading, setLoading] = useState(false);
  const [buttonCount,setButtonCount] = useState();
  const [JWT, setJWT] = useState(null);
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
    setButtonCount(buttonCount+1)
    axios
      .post("http://"+API_IP+"/auth", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
        },
      })
      .then(function (response) {
        cookies.set("Token", response.data.JWT, { path: "/" });
        setJWT(response.data.JWT);
        setLoading(false);
      })
      .catch(function (error) {
        setError("Request Error !!!");
        setLoading(false);
      });
  };
  console.log(loading);

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
              fullWidth="true"
              id="outlined-error-helper-text"
              label="Username"
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handleUserPasswordInput}
              sucess
              fullWidth="true"
              id="outlined-error-helper-text"
              label="Password"
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
                <Link activeClassName="is-active" to={"/products"}>
                  <div clasName="text-md font-bold">Login</div>
                </Link>
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
            <div className="grid grid-cols-2 gap-1">
              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                size="large"
                fullWidth="true"
                onClick={handlePost}
              >
                <Link activeClassName="is-active" to={"/products"}>
                  <div clasName="text-md font-bold">Login</div>
                </Link>
              </Button>
              <Button
                sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                variant="outlined"
                fullWidth="true"
                size="large"
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