import { Box } from "@chakra-ui/react";

function CustomButton() {
  return (
    <Box
      as="button"
      height="auto"
      width="auto"
      px="20px"
      py="10px"
      lineHeight="normal"
      fontSize="14px"
      fontWeight="bold"
      color="bcPrimary.ice"
      bg="bcSecondary.hemlock"
      border="2px"
      borderColor="bcSecondary.hemlock"
      textDecoration="none"
      transition="50ms ease-out"
      _hover={{
        bg: "#008242",
        borderColor: "#008242",
        boxShadow: "0 2px 3px rgb(0 0 0 / 20%)",
        transform: "translate(0, -2px)",
      }}
    >
      Log In
    </Box>
  );
}

export default CustomButton;

// const button = {
//     // width: "auto",
//     // height: "auto",
//     // font-size: "14px",
//     // background: "#046a38",
//     // color: "#ffffff",
//     padding: "10px 20px",
//     font-weight: "bold",
//     display: "inline-block",
//     cursor: "pointer",
//     outline: "none",
//     // border: "2px solid #046a38",
//     line-height: "normal",
//     // transition: "50ms ease-out",
//     border-radius:" 3px 3px 3px 3px",
//     text-decoration: "none",
//   };
