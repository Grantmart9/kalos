import React from "react";
import Product_GX1000 from "images/Product_GX1000.jpg";
import Product_GX1001 from "images/Product_GX1001.jpg";
import Product_GX1002 from "images/Product_GX1002.jpg";
import Product_GX1003 from "images/Product_GX1003.jpg";
import Product_GX1004 from "images/Product_GX1004.jpg";
import Product_GX1005 from "images/Product_GX1005.jpg";
import Product_GX1006 from "images/Product_GX1006.jpg";
import Product_GX1007 from "images/Product_GX1007.jpg";

export const ProductList = [
  {
    product_code: "GX1000",
    title: "ProductList",
    description:"dsadsa",
    brand: "Black opium",
    price: "R 1,890.00",
    image: (
      <>
        <img  src={Product_GX1000} />
      </>
    ),
  },
  {
    product_code: "GX1001",
    title: "Fragrances",
    description: " Libre Eau De Parfum Intense",
    brand: "Yves Saint Laurent",
    price: "R 2,300.00",
    image: (
      <>
        <img src={Product_GX1001} />
      </>
    ),
  },
  {
    product_code: "GX1002",
    title: "Fragrances",
    description: "5th Avenue Duo Pack",
    brand: "Elizabeth Arden",
    price: "R 445.00",
    image: (
      <>
        <img src={Product_GX1002} />
      </>
    ),
  },
  {
    product_code: "GX1003",
    title: "Fragrances",
    description: "Eau De Parfum",
    brand: "Elie Saab",
    price: "R 2,380.00",
    image: (
      <>
        <img src={Product_GX1003} />
      </>
    ),
  },
  {
    product_code: "GX1004",
    title: "Fragrances",
    description: "Metallique Eau De Parfum",
    brand: "Tom Ford",
    price: "R 3,285.00",
    image: (
      <>
        <img src={Product_GX1004} />
      </>
    ),
  },
  {
    product_code: "GX1005",
    title: "Fragrances",
    description: "yves saint lauruent",
    brand: "Black opium",
    price: "R1890",
    image: (
      <>
        <img
          className="flex align-center justify-center"
          src={Product_GX1005}
        />
      </>
    ),
  },
  {
    product_code: "GX1006",
    title: "Fragrances",
    description: "yves saint lauruent",
    brand: "Black opium",
    price: "R1890",
    image: (
      <>
        <img src={Product_GX1006} />
      </>
    ),
  },
  {
    product_code: "GX1007",
    title: "Fragrances",
    description: "yves saint lauruent",
    brand: "Black opium",
    price: "R1890",
    image: (
      <>
        <img src={Product_GX1007} />
      </>
    ),
  },
];
