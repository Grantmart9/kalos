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
const cookies = new Cookies();

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const Cart = () => {
  const size = Size();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState();

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
        setError(error);
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (error) {
    <div>error</div>;
  }

  if (loading) {
    return <div>loading data...</div>;
  }

  console.log(data);

  return (
    <div>
      <div>
        {size == "MD" || size == "SM" || size == "XS" ? (
          <div
            style={{ color: pageHeading, marginTop: "15%" }}
            className="text-xl flex align-center justify-center mb-2 p-2 w-full"
          >
            {data.map((item) => (
              <div className="grid grid-rows-4 gap-2 mb-4 shadow-md p-3">
                <div>Brand: {item.brand}</div>
                <div>Description: {item.product_description}</div>
                <div>Qty: {item.qty}</div>
                <div>Delivery time: {item.delivery_time} days</div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{ color: pageHeading, marginTop: "1pt" }}
            className="text-xl flex align-center justify-center mb-2 p-2 w-full"
          >
            {data.map((item) => (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert (100g serving)</TableCell>
                      <TableCell align="right">Calories</TableCell>
                      <TableCell align="right">Fat&nbsp;(g)</TableCell>
                      <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                      <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
