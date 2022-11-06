import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

function CustomLink({ ChakraComponent, href, children, ...props }) {
  console.log(props);
  return (
    <NextLink href={href} legacyBehavior passHref>
      <Link>
        <ChakraComponent {...props}> {children} </ChakraComponent>
      </Link>
    </NextLink>
  );
}

export default CustomLink;
