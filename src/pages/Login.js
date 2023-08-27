import React from "react";
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

export const Login = () => {
  const size = Size();
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
              sucess
              id="outlined-error-helper-text"
              label="Username"
              helperText="Incorrect entry."
            />
          </div>
          <div>
            <TextField
              sx={{ color: buttonColor }}
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
