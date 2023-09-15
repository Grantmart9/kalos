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
import Loading from "images/Loading.gif";
import { API_IP } from "components/API/API";
const axios = require("axios");

const OtherDetails = ({
  handleUserNameInput,
  handlePasswordInput,
  handleUserConfirmPasswordInput,
  handleUserEmailInput,
  password,
  confirmpassword,
}) => {
  var textFieldColour = "error";
  if (confirmpassword != "") {
    if (password == confirmpassword) {
      textFieldColour = "success";
      console.log(textFieldColour);
    } else {
      textFieldColour = "error";
      console.log(textFieldColour);
    }
  } else {
    textFieldColour = "error";
  }

  return (
    <div>
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
          color={textFieldColour}
          id="outlined-error-helper-text"
          label="Password"
        />
      </div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleUserConfirmPasswordInput}
          sucess
          color={textFieldColour}
          id="outlined-error-helper-text"
          label="Confirm Password"
        />
      </div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleUserEmailInput}
          sucess
          id="outlined-error-helper-text"
          label="email"
        />
      </div>
    </div>
  );
};

const PersonalDetails = ({
  handleUserFirstnameInput,
  handleUserAddressInput,
  handleCellInput,
  handleUserLastnameInput,
}) => {
  return (
    <div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleUserFirstnameInput}
          sucess
          id="outlined-error-helper-text"
          label="Firstname"
        />
      </div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleUserLastnameInput}
          sucess
          id="outlined-error-helper-text"
          label="LastName"
        />
      </div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleUserAddressInput}
          sucess
          id="outlined-error-helper-text"
          label="Address"
        />
      </div>
      <div>
        <TextField
          sx={{ color: buttonColor }}
          onChange={handleCellInput}
          sucess
          id="outlined-error-helper-text"
          label="Cell"
        />
      </div>
    </div>
  );
};

export const Register = () => {
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [cell, setCell] = useState("");
  const [address, setAddress] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
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
  const handleUserFirstnameInput = (e) => {
    setFirstName(e.target.value);
  };
  const handleUserAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleCellInput = (e) => {
    setCell(e.target.value);
  };
  const handleUserLastnameInput = (e) => {
    setLastName(e.target.value);
  };

  const handlePost = () => {
    setLoading(true);
    axios
      .post("http://" + API_IP + "/put_users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
          email: email,
          cell: cell,
          address: address,
          lastName: lastName,
          firstName: firstName,
        },
      })
      .then(function (response) {})
      .catch(function (error) {});
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
    <div>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div
          style={{ color: pageHeading, marginTop: "25%" }}
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
              <div className="grid grid-cols-2 gap-2">
                <OtherDetails
                  handleUserNameInput={handleUserNameInput}
                  handlePasswordInput={handlePasswordInput}
                  handleUserConfirmPasswordInput={
                    handleUserConfirmPasswordInput
                  }
                  handleUserEmailInput={handleUserEmailInput}
                  confirmpassword={confirmpassword}
                  password={password}
                />
                <PersonalDetails
                  handleUserFirstnameInput={handleUserFirstnameInput}
                  handleUserAddressInput={handleUserAddressInput}
                  handleCellInput={handleCellInput}
                  handleUserLastnameInput={handleUserLastnameInput}
                />
              </div>
              <div className="flex align-center justify-center">
                <Button
                  sx={{
                    color: buttonColor,
                    mt: 3,
                    mx: "auto",
                    maxWidth: "200pt",
                  }}
                  variant="outlined"
                  onClick={handlePost}
                  size="=large"
                  fullWidth="true"
                >
                  <Link to={"/products"}>
                    <div clasName="text-md font-bold">Register</div>
                  </Link>
                </Button>
              </div>
            </Box>
          </div>
        </div>
      ) : (
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
              <div className="grid grid-cols-2 gap-2">
                <OtherDetails
                  handleUserNameInput={handleUserNameInput}
                  handlePasswordInput={handlePasswordInput}
                  handleUserConfirmPasswordInput={
                    handleUserConfirmPasswordInput
                  }
                  handleUserEmailInput={handleUserEmailInput}
                  confirmpassword={confirmpassword}
                  password={password}
                />
                <PersonalDetails
                  handleUserFirstnameInput={handleUserFirstnameInput}
                  handleUserAddressInput={handleUserAddressInput}
                  handleCellInput={handleCellInput}
                  handleUserLastnameInput={handleUserLastnameInput}
                />
              </div>
              <div className="flex align-center justify-center">
                <Button
                  sx={{
                    color: buttonColor,
                    mt: 3,
                    mx: "auto",
                    maxWidth: "200pt",
                  }}
                  variant="outlined"
                  onClick={handlePost}
                  size="=large"
                  fullWidth="true"
                >
                  <Link to={"/products"}>
                    <div clasName="text-md font-bold">Register</div>
                  </Link>
                </Button>
              </div>
            </Box>
          </div>
        </div>
      )}
    </div>
  );
};
