import React from "react";
import perfume from "../images/Product_GX1000.jpg";
import {ProductList} from "../components/lists/ProductsList";
import {buttonColor,layoutColor,pageHeading} from "components/feutures";

export const Specials = () => {
  return (
    <div>
      <div style={{fontFamily:pageHeading}} className="flex align-center justify-center mb-2 p-2 w-full">
        Specials
      </div>
      <div className="grid grid-cols-4 gap-2">
        {ProductList.map((product) => (
          <div className="p-2">
            <img className="p-5" src={product.image} alt={"image"} />
            <div className="text-center mt-1">{product.description}</div>
            <div className="text-center">{product.brand}</div>
            <div className="text-center">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
