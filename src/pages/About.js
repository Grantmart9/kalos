import React from "react";
import {buttonColor,layoutColor,pageHeading} from "components/feutures";

export const About = () => {
  return (
    <div>
      <div
        style={{ color: pageHeading }}
        className="text-xl flex align-center justify-center mb-2 p-2 w-full"
      >
        About
      </div>
      <div classname="text-xl font-bold">Dr Shuan is a nwata</div>
    </div>
  );
};
