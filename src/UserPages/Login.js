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
import Loading from "images/Loading.gif";
const cookies = new Cookies();
const axios = require("axios");

export const Login = ({setJWT}) => {
  /*State change variables*/
  const [user_name, setUser_name] = useState("");
  const [password, setPassword] = useState("");
  /*function variables */
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const size = Size();

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleUserNameInput = (e) => {
    setUser_name(e.target.value);
  };
  const handleUserPasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handlePost = () => {
    setLoading(true);
    axios
      .post("http://" + API_IP + "/auth", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        user_details: {
          username: user_name,
          password: password,
        },
      })
      .then(function (response) {
        if (response.data != null) {
          cookies.set("Token", response.data);
          setJWT(true);
        } else {
          cookies.set("Token", "Not Authorised");
        }
      })
      .then(function () {
        setLoading(false);
      })
      .catch(function (error) {
        setError("Request Error !!!");
        setLoading(false);
        window.location.reload();
      });
  };

  if (error) {
    <div>{error}</div>;
  }
  return (
    <div>
      {loading ? (
        <div
          style={{ color: pageHeading }}
          className="h-screen flex items-center justify-center"
        >
          <img width={80} height={80} src={Loading} />
        </div>
      ) : (
        <>
          {size == "MD" || size == "SM" || size == "XS" ? (
            <div
              style={{ color: pageHeading, marginTop: "25%" }}
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
                  <div className="flex align-center justify-center">
                    <TextField
                      sx={{ color: buttonColor }}
                      onChange={handleUserNameInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Username"
                    />
                  </div>
                  <div className="flex align-center justify-center">
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
                    <div className="grid grid-rows-2 p-2">
                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        onClick={handlePost}
                        size="small"
                        fullWidth="true"
                      >
                        <Link activeClassName="is-active" to={"/products"}>
                          <div clasName="text-md font-bold">Login</div>
                        </Link>
                      </Button>

                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        size="small"
                        fullWidth="true"
                      >
                        <Link to={"/register"}>
                          <div clasName="text-md font-bold">Register</div>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-1 p-2">
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
          ) : (
            <div
              style={{ color: pageHeading, marginTop: "5%" }}
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
                  <div className="flex align-center justify-center">
                    <TextField
                      sx={{ color: buttonColor }}
                      onChange={handleUserNameInput}
                      sucess
                      fullWidth="true"
                      id="outlined-error-helper-text"
                      label="Username"
                    />
                  </div>
                  <div className="flex align-center justify-center">
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
                    <div className="grid grid-rows-2 p-2">
                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        onClick={handlePost}
                        size="medium"
                        fullWidth="true"
                      >
                        <Link activeClassName="is-active" to={"/products"}>
                          <div clasName="text-md font-bold">Login</div>
                        </Link>
                      </Button>

                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        size="medium"
                        fullWidth="true"
                      >
                        <Link to={"/register"}>
                          <div clasName="text-md font-bold">Register</div>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-1 p-2">
                      <Button
                        sx={{ color: buttonColor, mt: 3, mx: "auto" }}
                        variant="outlined"
                        size="medium"
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
                        size="medium"
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
          )}
        </>
      )}
    </div>
  );
};
