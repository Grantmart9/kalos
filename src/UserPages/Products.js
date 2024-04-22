import React, { useState, useEffect } from "react";
import { ProductList } from "components/lists/ProductsList";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/DisplaySettings/feutures";
import axios from "axios";
import Loading from "images/Loading.gif";
import { API_IP } from "components/API/API";
import { Size } from "media-query";
import Cookies from "universal-cookie";
import { Login } from "UserPages/Login";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
const cookies = new Cookies();


export const Products = () => {
  const [menu, setMenu] = useState(ProductList);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    axios
      .get("http://" + API_IP + "/get_products", {})
      .then(function (response) {
        setData(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setError("Request Error !!!");
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const handleClick = ({ product }) => {
    setItem({
      product_code: product.product_code,
      description: product.description,
      brand: product.brand,
      price: product.price,
      image: product.image,
    });

    setOpen(!open);
  };

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleAdd = () => {
    var NewItem = item;
    var token = cookies.get("Token");
    var user_id = cookies.get("User_id");
    delete NewItem.image;
    setOpen(!open);

    axios
      .post("http://" + API_IP + "/add_to_cart", {
        product_code: NewItem.product_code,
        amount: amount,
        token: token,
        cart_id: user_id,
      })
      .then((res) => setData(res.data) + setLoading(false))
      .catch(function (error) {});
  };
  console.log();

  if (data == "User not authorised") {
    return (
      <Redirect
        to={{
          pathname: "/login",
          search: "?utm=your+face",
          state: { referrer: "products" },
        }}
      />
    );
  }

  return (
    <div>
      {!loading ? (
        <div>
          <div className="grid grid-cols-3 gap-2 mb-4 shadow-md">
            <Button sx={{ backgroundColor: layoutColor, color: buttonColor }}>
              <div style={{ fontFamily: fontType }}>fragrances</div>
            </Button>
            <Button sx={{ backgroundColor: layoutColor, color: buttonColor }}>
              <div style={{ fontFamily: fontType }}>skincare</div>
            </Button>
            <Button sx={{ backgroundColor: layoutColor, color: buttonColor }}>
              <div style={{ fontFamily: fontType }}>makeup</div>
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {menu.map((product, i) => (
              <div key={i} className="p-2">
                <div className="flex align-center justify-center">
                  <Button onClick={() => handleClick({ product })}>
                    <div style={{ maxWidth: " 28ch" }}>{product.image}</div>
                  </Button>
                </div>
                <div className="text-center mt-1">{product.description}</div>
                <div className="text-center">{product.brand}</div>
                <div className="text-center">{product.price}</div>
              </div>
            ))}
          </div>
          <Dialog
            open={open}
            fullScreen={true}
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogContent>
              <div className="align-center justify-center">
                <div className="flex align-center justify-end">
                  <Button
                    sx={{ backgroundColor: layoutColor, color: buttonColor }}
                    onClick={() => setOpen(!open)}
                  >
                    back
                  </Button>
                </div>
                <div className="grid grid-rows-2 align-center justify-center">
                  <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                    {item.image}
                  </div>
                  <div>
                    <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                      {item.name}
                    </div>
                    <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                      {item.description}
                    </div>
                    <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                      {item.brand}
                    </div>
                    <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
            <div className="flex align-center justify-center mt-2">
              <Box sx={{ width: 300 }}>
                <Slider
                  sx={{ backgroundColor: "#f0f5f5", color: "white",padding:"2pt" }}
                  defaultValue={0}
                  valueLabelDisplay="on"
                  onChange={handleAmount}
                  step={1}
                  marks
                  min={0}
                  max={100}
                  value={amount}
                />
              </Box>
            </div>
            <div className="flex align-center justify-center mt-2 mb-5">
              <Button
                onClick={handleAdd}
                size="medium"
                sx={{
                  backgroundColor: layoutColor,
                  color: buttonColor,
                  height: "50px",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Dialog>
        </div>
      ) : (
        <div
          style={{ color: pageHeading }}
          className="h-screen flex items-center justify-center"
        >
          <img width={80} height={80} src={Loading} />
        </div>
      )}
    </div>
  );
};
