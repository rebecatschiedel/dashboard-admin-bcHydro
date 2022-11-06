import { Box } from "@chakra-ui/react";

function CustomButton({ children, ...props }) {
  return (
    <Box
      as="button"
      height="auto"
      px="20px"
      py="10px"
      my="1rem"
      lineHeight="normal"
      fontSize="14px"
      fontWeight="bold"
      color="bcPrimary.ice"
      bg="bcSecondary.hemlock"
      border="2px"
      borderColor="bcSecondary.hemlock"
      borderRadius="0.2rem"
      textDecoration="none"
      transition="50ms ease-out"
      boxShadow="md"
      _hover={{
        bg: "#008242",
        borderColor: "#008242",
        transform: "translate(0, -2px)",
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default CustomButton;
