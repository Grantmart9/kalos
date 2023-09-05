import { useMediaQuery } from "@react-hook/media-query";
{
  /* Width */
}
const useXlscreen = () => useMediaQuery("(max-width:1280px)");
const useLscreen = () => useMediaQuery("(max-width:1024px)");
const useMdscreen = () => useMediaQuery("(max-width:750px)");
const useSmscreen = () => useMediaQuery("(max-width:500px)");
const useXsmscreen = () => useMediaQuery("(max-width:375px)");
{
  /* Length */
}
export const useSmscreenlandscape = () => useMediaQuery("(max-height:400px)");
export const useMdscreenlandscape = () => useMediaQuery("(max-height:500px)");

export var Size = () => {
  var Screen1 = useXlscreen();
  var Screen2 = useLscreen();
  var Screen3 = useMdscreen();
  var Screen4 = useSmscreen();
  var Screen5 = useXsmscreen();
  var Screen6 = useSmscreenlandscape();
  var Screen7 = useMdscreenlandscape();

  var Size = "";

  if (Screen1) {
    Size = "XL";
    if (Screen2) {
      Size = "L";
      if (Screen3) {
        Size = "MD";
        if (Screen4) {
          Size = "SM";
          if (Screen5) {
            Size = "XS";
          }
        }
      }
    }
  }
  if (!Screen1) {
    if (!Screen2) {
      if (!Screen3) {
        if (!Screen4) {
          if (!Screen5) {
            Size = "XL";
          }
        }
      }
    }
  }

  return Size;
};
