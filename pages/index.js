import { Button, Heading, Text } from "@chakra-ui/react";
import CustomLink from "../components/CustomLink";

function Home() {
  return (
    <div>
      Home
      <CustomLink href="/" ChakraComponent={Button} colorScheme="teal">
        This is a button link
      </CustomLink>
      <Heading color="bcPrimary.sea">home</Heading>
    </div>
  );
}

export default Home;
