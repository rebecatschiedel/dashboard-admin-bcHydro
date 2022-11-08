import { Flex, Text, Icon, Link, Hide } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

function SideBarItem({ icon, title, isOpen, href }) {
  const router = useRouter();
  const activeRoute = (routeName) => {
    return router.pathname
      .toLowerCase()
      .includes(routeName.replace(/\s+/g, ""));
  };

  return (
    <Flex mt={30} flexDir="column" w="100%">
      <NextLink href={href} legacyBehavior passHref>
        <Link
          _hover={{
            textDecor: "none",
            backgroundColor: "bcPrimary.ice",
            color: "bcPrimary.spruce",
          }}
        >
          <Flex
            color={
              activeRoute(title.toLowerCase())
                ? "bcPrimary.ice"
                : "bcSecondary.granite"
            }
            bg={
              activeRoute(title.toLowerCase())
                ? "bcPrimary.sea"
                : "bcSecondary.ice"
            }
            p={3}
            borderRadius={8}
          >
            <Icon
              as={icon}
              fontSize="xl"
              color={
                activeRoute(title.toLowerCase())
                  ? "bcPrimary.ice"
                  : "bcSecondary.granite"
              }
            />
            {!isOpen ? (
              <Hide below="md">
                <Text ml={5}>{title}</Text>
              </Hide>
            ) : (
              <Text ml={5}>{title}</Text>
            )}
          </Flex>
        </Link>
      </NextLink>
    </Flex>
  );
}

export default SideBarItem;
