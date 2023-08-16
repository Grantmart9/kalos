import { useMediaQuery } from "@react-hook/media-query";

export const useMd = () => useMediaQuery("(max-width : 780px)");

export const useXlscreen = () => useMediaQuery("(max-width:1280px)");
export const useLscreen  = () => useMediaQuery("(max-width:1024px)");
export const useMdscreen = () => useMediaQuery("(max-width:750px)");
export const useSmscreen = () => useMediaQuery("(max-width:500px)");
export const useXsmscreen = () => useMediaQuery("(max-width:375px)");

export const useSmscreenlandscape = () => useMediaQuery("(max-height:400px)");
export const useMdscreenlandscape = ()=> useMediaQuery("(max-height:500px)");