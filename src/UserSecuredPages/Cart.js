import React, { useEffect, useState } from "react";
import {
  buttonColor,
  layoutColor,
  pageHeading,
} from "components/DisplaySettings/feutures";
import { Size } from "media-query";
import axios from "axios";
import { API_IP } from "components/API/API";
import Cookies from "universal-cookie";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
const cookies = new Cookies();

const UserCart = ({ data, handleAdd, handleSub }) => {
  return (
    <div
      style={{ color: pageHeading, marginTop: "1pt" }}
      className="text-xl flex align-center justify-center mb-2 p-2 w-full"
    >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ font: "bold" }} align="left">
                Product
              </TableCell>

              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Delivery time (days)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="left">{row.product_description}</TableCell>

                <TableCell align="left">
                  <Button className="ml-2" onClick={handleAdd}>
                    &darr;
                  </Button>
                  {row.qty}
                  <Button className="mr-2" onClick={handleSub}>
                    &uarr;
                  </Button>
                </TableCell>
                <TableCell align="left">{row.delivery_time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const Cart = () => {
  const size = Size();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

  const handleAdd = () => {
    axios
      .post("http://" + API_IP + "/add_to_cart", {
        product_code: "GX1001",
        amount: 1,
        token: cookies.get("Token"),
        cart_id: 2,
      })
      .then((res) => setData(res.data) + setLoading(false))
      .catch(function (error) {});
  };

  const handleSub = () => {
    axios
      .post("http://" + API_IP + "/remove_from_cart", {
        product_code: "GX1001",
        token: cookies.get("Token"),
        cart_id: 2,
      })
      .then((res) => setData(res.data) + setLoading(false))
      .catch(function (error) {});
  };

  useEffect(() => {
    var token = cookies.get("Token");
    var user_id = cookies.get("User_id");
    console.log("fetching data");
    axios
      .post("http://" + API_IP + "/get_cart", {
        token: token,
        cart_id: user_id,
      })
      .then((res) => setData(res.data) + setLoading(false))
      .catch(function (error) {
        setError(true);
        setLoading(false);
      });
  }, [loading]);

  return (
    <div>
      {error ? (
        <Redirect
          to={{
            pathname: "/login",
            state: { referrer: "products" },
          }}
        />
      ) : (
        <div>
          {!loading ? (
            <div>
              {size == "MD" || size == "SM" || size == "XS" ? (
                <div
                  style={{ color: pageHeading, marginTop: "15%" }}
                  className="text-xl flex align-center justify-center mb-2 p-2 w-full"
                >
                  <UserCart
                    data={data}
                    handleSub={handleAdd}
                    handleAdd={handleSub}
                  />
                </div>
              ) : (
                <UserCart
                  data={data}
                  handleSub={handleAdd}
                  handleAdd={handleSub}
                />
              )}
              <div className="flex align-center justify-center mt-4">
                <Button
                  size="medium"
                  sx={{
                    backgroundColor: layoutColor,
                    color: buttonColor,
                    height: "50px",
                  }}
                >
                  Checkout
                </Button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      )}
    </div>
  );
};
