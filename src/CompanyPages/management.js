import React from "react";
import { buttonColor, layoutColor, pageHeading } from "components/DisplaySettings/feutures";
import { Size } from "media-query";

export const Management = () => {
  return (
    <div>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div
          style={{ color: pageHeading, marginTop: "15%" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          Management
        </div>
      ) : (
        <div
          style={{ color: pageHeading, marginTop: "1pt" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          Management
        </div>
      )}
    </div>
  );
};
