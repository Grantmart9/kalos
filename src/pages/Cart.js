import React from "react";
import {buttonColor,layoutColor,pageHeading} from "components/feutures";

export const Cart = () => {
  return (
    <div>
      <div
        style={{ color: pageHeading }}
        className="text-xl flex align-center justify-center mb-2 p-2 w-full"
      >
        My Cart
      </div>
    </div>
  );
};
