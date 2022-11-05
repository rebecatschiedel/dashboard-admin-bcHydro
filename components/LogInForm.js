import { useState } from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import CustomButton from "./CustomButton";

function LogInForm() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInputChange = (e) => setEmailInput(e.target.value);
  const handlePasswordInputChange = (e) => setPasswordInput(e.target.value);
  const isEmailError = emailInput === "";
  const isPasswordError = passwordInput === "";

  return (
    <form>
      <FormControl isInvalid={isEmailError}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          value={emailInput}
          onChange={handleEmailInputChange}
        />
        {!isEmailError && (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isPasswordError}>
        <FormLabel>Password</FormLabel>
        <Link href="/new-password">
          <FormHelperText>Did you forget your password?</FormHelperText>
        </Link>
        <Input
          type="text"
          value={passwordInput}
          onChange={handlePasswordInputChange}
        />
        {!isPasswordError && (
          <FormErrorMessage>Password is required.</FormErrorMessage>
        )}
      </FormControl>
      <CustomButton></CustomButton>
    </form>
  );
}

export default LogInForm;
