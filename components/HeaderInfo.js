import {
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
  HStack,
  Flex,
  Avatar,
  Heading,
  Divider,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import { SearchIcon, EmailIcon, BellIcon } from "@chakra-ui/icons";

function HeaderInfo() {
  return (
    <HStack spacing={4}>
      <HStack>
        <Popover>
          <PopoverTrigger>
            <IconButton
              variant="Ghost"
              color="bcPrimary.sea"
              aria-label="Messages"
              fontSize="2xl"
              icon={<EmailIcon />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight="semibold" fontSize="lg">
              Messages
            </PopoverHeader>
            <PopoverBody>
              <Flex flexDir="column" mb={4}>
                <Flex mt={4} align="center">
                  <Avatar size="sm" src="" />
                  <Flex flexDir="column" ml={4}>
                    <Heading as="h3" fontWeight="semibold" size="sm">
                      Muammer Necipoglu
                    </Heading>
                    <Text>About the subject we were...</Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex flexDir="column" mb={4}>
                <Divider />
                <Flex mt={4} align="center">
                  <Avatar size="sm" src="" />
                  <Flex flexDir="column" ml={4}>
                    <Heading as="h3" size="sm">
                      Rebeca Guedes
                    </Heading>
                    <Text>Hi Baran, let me know when...</Text>
                  </Flex>
                </Flex>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger>
            <IconButton
              variant="Ghost"
              color="bcPrimary.sea"
              aria-label="Notifications"
              fontSize="2xl"
              icon={<BellIcon />}
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader fontWeight="semibold" fontSize="lg">
              Notifications
            </PopoverHeader>
            <PopoverBody>You have no new Notifications.</PopoverBody>
          </PopoverContent>
        </Popover>
      </HStack>
      <InputGroup color="bcPrimary.sea">
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input type="text" placeholder="Search" />
      </InputGroup>
    </HStack>
  );
}

export default HeaderInfo;
