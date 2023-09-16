import React, {useEffect} from "react";
import { buttonColor, layoutColor, pageHeading } from "components/DisplaySettings/feutures";
import { API_IP } from "components/API/API";
import { Size } from "media-query";

export const Contact = () => {
  const size = Size();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div
          style={{ color: pageHeading, marginTop: "15%" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          Contact
        </div>
      ) : (
        <div
          style={{ color: pageHeading, marginTop: "1pt" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          Contact
        </div>
      )}
    </div>
  );
};
