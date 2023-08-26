import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/feutures";

export const Login = () => {
  return (
    <div
      style={{ color: pageHeading,marginTop:"5%" }}
      className="flex justify-center"
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, maxWidth: "22ch" },
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
        <div className="flex align-center justify-center">
          <Button
            sx={{ color: buttonColor, mt: 3, mx: "auto" }}
            variant="outlined"
          >
            Login
          </Button>
          <Button
            sx={{ color: buttonColor, mt: 3, mx: "auto" }}
            variant="outlined"
          >
            Register
          </Button>
        </div>
      </Box>
    </div>
  );
};
