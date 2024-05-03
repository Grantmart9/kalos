import React, { useState, useEffect } from "react";
import { ProductList } from "components/lists/ProductsList";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grow from "@mui/material/Grow";
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

const ProductData = {
  product_details: [
    { name: "strain", data: ["Sativa", "Indica", "Mixed"] },
    { name: "grow", data: ["Indoor", "OutDoor", "Hydro"] },
    { name: "smoke", data: ["Anxiety", "focus", "Energy", "Relax"] },
    { name: "taste", data: ["fruity", "citrus", "spicey"] },
  ],
  products: [
    {
      product_name: "Exodus Cheese",
      product_id: "EX23452",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Sativa",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Green Crack",
      product_id: "EX23453",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Sativa",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Purple haze",
      product_id: "EX23454",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Brown haze",
      product_id: "EX23455",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
    {
      product_name: "Cool haze",
      product_id: "EX23456",
      product_header: "Good for focus,Axiety,energy",
      product_description: "Grown by This guy",
      qty_in_stock: 12,
      delivery_time: 1,
      product_cost: 120,
      product_type: "Indica",
      smoke: ["Anxiety", "focus"],
      grow: "Indoor",
    },
  ],
};

export const Products = () => {
  const [menu, setMenu] = useState(ProductList);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [filter, setFilter] = useState(false);
  const [filterSelector, setFilterSelector] = useState({});

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
        setLoading(false);
        setError(error.message);
      });
  }, []);

  const handleClick = ({ product }) => {
    setItem({
      product_name: product.product_name,
      product_id: product.product_id,
      product_header: product.product_header,
      product_description: product.product_description,
      qty_in_stock: product.qty_in_stock,
      delivery_time: product.delivery_time,
      product_cost: product.product_cost,
      product_type: product.product_type,
      smoke: product.smoke,
      grow: product.grow,
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

  const handleFilter = () => {
    setFilter(!filter);
  };

  const handleFilterSelector = ({ catagory, cat }) => {
    const names = catagory.name;
    setFilterSelector({ catagory: names, selection: cat });
  };

  const applyFilter = () => {
    var user_id = cookies.get("User_id");
    axios
      .post("http://" + API_IP + "/apply_filter", {
        filterSelector,
        user_id,
      })
      .then((res) => setData(res.data) + setLoading(false))
      .catch(function (error) {});
  };

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
          <Grow in={true} timeout={1200}>
            <div className="flex align-center justify-center">
              <div className="bg-white inline-block w-full shadow-md p-1">
                <div className="flex align-center justify-center">
                  <Button
                    fullWidth={true}
                    sx={{
                      backgroundColor: "#ebf7f7",
                      color: buttonColor,
                      maxWidth: "100pt",
                    }}
                    onClick={handleFilter}
                  >
                    <div style={{ fontFamily: fontType }}>Filter</div>
                  </Button>
                </div>
                {filter ? (
                  <div className="mt-1">
                    {ProductData.product_details.map((catagory, e) => (
                      <div className="flex align-center justify-center" key={e}>
                        {catagory.data.map((cat, d) => (
                          <div>
                            <div className="inline" key={d}>
                              <Button
                                onClick={() =>
                                  handleFilterSelector({ catagory, cat })
                                }
                                sx={{
                                  backgroundColor: layoutColor,
                                  color: buttonColor,
                                }}
                              >
                                <div style={{ fontFamily: fontType }}>
                                  {cat}
                                </div>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="flex align-center justify-center mt-1">
                      <Button
                        fullWidth={true}
                        sx={{
                          backgroundColor: "#ebf7f7",
                          color: buttonColor,
                          maxWidth: "100pt",
                        }}
                        onClick={applyFilter}
                      >
                        <div style={{ fontFamily: fontType }}>Apply Filter</div>
                      </Button>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </Grow>
          <div className="grid grid-cols-4 gap-2 h-screen">
            {ProductData.products.map((product, i) => (
              <div key={i} className="p-2">
                <div className="flex align-center justify-center">
                  <Button onClick={() => handleClick({ product })}>
                    <div style={{ maxWidth: " 28ch" }}>
                      {product.product_name}
                    </div>
                  </Button>
                </div>
                <div className="text-center mt-1">{product.product_header}</div>
                <div className="text-center">{product.product_description}</div>
                <div className="text-center">{product.product_cost}</div>
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
                  {item.product_name}
                </div>
                <div>
                  <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                    {item.product_header}
                  </div>
                  <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                    {item.product_descriptiondescription}
                  </div>
                  <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                    {item.product_cost}
                  </div>
                  <div className="flex justify-center align-middle transition ease-in duration-3000 mx-auto my-auto">
                    {item.delivery_time}
                  </div>
                </div>
              </div>
            </DialogContent>
            <div className="flex align-center justify-center mt-2">
              <Box sx={{ width: 300 }}>
                <Slider
                  sx={{
                    backgroundColor: "#f0f5f5",
                    color: "white",
                    padding: "2pt",
                  }}
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
