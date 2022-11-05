import { Flex, Img } from "@chakra-ui/react";
import LogInForm from "../components/LogInForm";

function logIn() {
  return (
    <Flex>
      <Img
        src="./images/symbol.svg"
        alt="BC Hydro Symbol"
        boxSize="100px"
        objectFit="cover"
      />
      <form>
        <LogInForm></LogInForm>
      </form>
    </Flex>
  );
}

export default logIn;
