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

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box
      bgImg="url('./images/wave-long-blue-ice.png')"
      bgPos="bottom"
      bgRepeat="no-repeat"
      h="100vh"
      w="100vw"
    >
      <Flex
        flexDirection="column"
        backgroundColor="bcPrimary.ice"
        justifyContent="center"
        alignItems="center"
        m={["2rem auto 0", "5rem auto 0"]}
        p="1rem"
        width="fit-content"
        borderRadius="lg"
        boxShadow="md"
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
          <Heading color="bcPrimary.spruce" pb="2rem">
            Welcome
          </Heading>
          <Box minW={{ base: "90%", md: "468px" }}>
            <form>
              <Stack spacing={4}>
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
          <Link color="bcPrimary.sea" href="#">
            Sign Up
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
