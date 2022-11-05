import { extendTheme } from "@chakra-ui/react";

const colors = {
  bcPrimary: {
    sea: "#10A3C8",
    ice: "#FFFFFF",
    spruce: "#004F6C",
  },
  bcSecondary: {
    grass: "#48A739",
    hemlock: "#046A38",
    stone: "#9C948D",
    granite: "#3E3935",
    sunset: "#E8927C",
    arbutus: "#FA4616",
    sand: "#CBC4BC",
    tide: "#9ADBE8",
    moss: "#BCD19B",
    quartz: "#FCD299",
  },
  bcIllustrations: {
    sunflower: "#FED100",
    sockeye: "#E21E14",
  },
};

const theme = extendTheme({
  colors,
});

export default theme;
