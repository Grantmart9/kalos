import React, { useState, useEffect } from "react";
import { ProductList } from "components/lists/ProductsList";
import { FragrancesList } from "components/lists/Fragrances";
import { MakeupList } from "components/lists/Makeup";
import { SkincareList } from "components/lists/Skincare";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  buttonColor,
  layoutColor,
  pageHeading,
  fontType,
} from "components/feutures";
import axios from "axios";
import Loading from "images/Loading.gif";

export const Products = () => {
  const [menu, setMenu] = useState(ProductList);
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState();
  const [volume, setVolume] = useState();

  console.log(data);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://18.232.111.16/get_products", {})
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
    console.log(amount);
  };

  const handleVolume = (event) => {
    setVolume(event.target.value);
    console.log(volume);
  };

  const handleAdd = () => {
    var NewItem = item;

    NewItem["volume"] = volume;
    NewItem["amount"] = amount;
    delete NewItem.image;

    setOpen(!open);

    axios
      .post("http://18.232.111.16/add_to_cart", {
        product_code: NewItem.product_code,
        volume: NewItem.volume,
        amount: NewItem.amount,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(NewItem.product_code);
  };

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
                <Button onClick={() => handleClick({ product })}>
                  {product.image}
                </Button>
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
              <div className="flex align-center justify-end">
                <Button
                  sx={{ backgroundColor: layoutColor, color: buttonColor }}
                  onClick={() => setOpen(!open)}
                >
                  close
                </Button>
              </div>
              <div className="grid grid-rows-5 gap-1">
                <div className="transition ease-in duration-3000 mx-auto my-auto">
                  {item.image}
                </div>
                <div className="flex text-sm font-bold align-center justify-center">
                  {item.name}
                </div>
                <div className="flex text-sm font-bold align-center justify-center">
                  {item.description}
                </div>
                <div className="flex text-sm align-center justify-center">
                  {item.brand}
                </div>
                <div className="flex text-lg align-center justify-center">
                  {item.price}
                </div>
              </div>
            </DialogContent>
            <div className="grid grid-rows-2 gap-1">
              <div className="flex align-center justify-center">
                <div className="grid grid-rows-2">
                  <div className="text-xs">Volume</div>
                  <Select value={amount} onChange={handleVolume}>
                    <MenuItem value={10}>10ml</MenuItem>
                    <MenuItem value={30}>30ml</MenuItem>
                    <MenuItem value={100}>100ml</MenuItem>
                  </Select>
                </div>
                <div className="grid grid-rows-2 ml-2">
                  <div className="text-xs">Quantity</div>
                  <Select value={volume} onChange={handleAmount}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="flex align-center justify-center mt-2">
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
