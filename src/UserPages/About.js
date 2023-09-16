import React, {useEffect} from "react";
import {
  buttonColor,
  layoutColor,
  pageHeading,
} from "components/DisplaySettings/feutures";
import { API_IP } from "components/API/API";
import { Size } from "media-query";

export const About = () => {
  const size = Size();
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  /*size == "MD" || size == "SM" || size == "XS"*/
  return (
    <div>
      {size == "MD" || size == "SM" || size == "XS" ? (
        <div
          style={{ color: pageHeading, marginTop: "15%" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          About
        </div>
      ) : (
        <div
          style={{ color: pageHeading, marginTop: "1pt" }}
          className="text-xl flex align-center justify-center mb-2 p-2 w-full"
        >
          About
        </div>
      )}
      <div className="text-center p-2" style={{ color: buttonColor }}>
        In Ancient Greek, καλός (kalós) meant ‘beautiful’, and κάλλος meant
        ‘beauty’. That is where such English words as ‘calligraphy’ or
        ‘callisthenics’ come from. In modern Greek, it means ‘good’.
      </div>
    </div>
  );
};
