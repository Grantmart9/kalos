import React from "react";
import { buttonColor, layoutColor, pageHeading } from "components/DisplaySettings/feutures";
import { Size } from "media-query";

export const Management = () => {
  return (
    <div>
      <div
        style={{ color: pageHeading }}
        className="text-xl flex align-center justify-center mb-2 p-2 w-full"
      >
        Management
      </div>
      <div className="text-center" style={{ color: buttonColor }}>
        In Ancient Greek, καλός (kalós) meant ‘beautiful’, and κάλλος meant
        ‘beauty’. That is where such English words as ‘calligraphy’ or
        ‘callisthenics’ come from. In modern Greek, it means ‘good’.
      </div>
    </div>
  );
};
