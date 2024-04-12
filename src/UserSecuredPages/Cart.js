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
const cookies = new Cookies();

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
             <div className="grid grid-rows-3 gap-2 mb-4 shadow-md p-3">
              <div>Brand: {data[0].brand}</div>
              <div>Description: {data[0].product_description}</div>
              <div>Qty: {data[0].qty}</div>
              <div>Delivery time: {data[0].delivery_time} days</div>
            </div>
          </div>
        ) : (
          <div
            style={{ color: pageHeading, marginTop: "1pt" }}
            className="text-xl flex align-center justify-center mb-2 p-2 w-full"
          >
            <div className="grid grid-rows-3 gap-2 mb-4 shadow-md p-3">
              <div>Brand: {data[0].brand}</div>
              <div>Description: {data[0].product_description}</div>
              <div>Qty: {data[0].qty}</div>
              <div>Delivery time: {data[0].delivery_time} days</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
