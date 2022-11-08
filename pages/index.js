import { useState } from "react";
import NextLink from "next/link";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Img,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import CustomLink from "../components/CustomLink";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Flex
      flexDirection="column"
      backgroundColor="bcPrimary.ice"
      justifyContent="center"
      alignItems="center"
      mt={["2rem", "5rem"]}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Img
          src="./images/symbol.svg"
          alt="BC Hydro Symbol"
          boxSize="100px"
          objectFit="cover"
        />
        <Heading color="bcPrimary.spruce">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="bcPrimary.ice"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <NextLink href="/dashboard">
                <CustomButton width="100%">Log In</CustomButton>
              </NextLink>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box color="bcPrimary.spruce">
        New to us?{" "}
        <CustomLink href="#" ChakraComponent={Text}>
          Sign Up
        </CustomLink>
      </Box>
    </Flex>
  );
};

export default Login;
