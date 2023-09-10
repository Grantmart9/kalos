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
import { Size } from "media-query";
import Cookies from "universal-cookie";
import Loading from "images/Loading.gif";
const cookies = new Cookies();
const axios = require("axios");

const API_IP = "18.232.111.16:5000"

export const Register = () => {
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword,setConfirmPassword] = useState("");
  const [email,setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const size = Size();

  const handleUserNameInput = (e) => {
    setUser_name(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };
  const handleUserConfirmPasswordInput = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleUserEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const handlePost = () => {
    setLoading(true);
    axios
      .post("http://"+API_IP+"/put_users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
          email:email,

        },
      })
      .then(function (response) {
      })
      .catch(function (error) {
      });
  };
  console.log(loading);

  if (loading) {
    return (
      <div
        style={{ color: pageHeading }}
        className="flex justify-center align-center"
      >
        <div className="grid grid-rows-2 gap-6">
          <div className="flex align-center justify-center">
            <img src={Loading} />
          </div>
          <div>Loging in as: {user_name}</div>
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
      className="flex justify-center align-center"
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
              onChange={handleUserEmailInput}
              sucess
              id="outlined-error-helper-text"
              label="email"
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handleUserNameInput}
              sucess
              id="outlined-error-helper-text"
              label="Username"
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handlePasswordInput}
              sucess
              id="outlined-error-helper-text"
              label="Password"
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
              onChange={handleUserConfirmPasswordInput}
              sucess
              id="outlined-error-helper-text"
              label="Confirm Password"
            />
          </div>
          <div className="flex align-center justify-center">
            <Button
              sx={{ color: buttonColor, mt: 3, mx: "auto" }}
              variant="outlined"
              onClick={handlePost}
              size="small"
            >
              <Link to={"/products"}>
                <div clasName="text-md font-bold">Register</div>
              </Link>
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};
