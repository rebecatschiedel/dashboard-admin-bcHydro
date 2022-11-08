import {
  VStack,
  Breadcrumb,
  BreadcrumbItem,
  Heading,
  Box,
} from "@chakra-ui/react";

function HeaderTitle({ breadcrumbs }) {
  return (
    <VStack align="flex-start">
      <Breadcrumb color={"bcPrimary.sea"}>
        {breadcrumbs.map((item, i) => (
          <BreadcrumbItem
            key={i}
            isCurrentPage={i === breadcrumbs.length - 1 && "1"}
          >
            <Box fontSize="sm">{item}</Box>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <Heading fontWeight="semibold" mt="-0.4rem !important">
        {breadcrumbs.at(-1)}
      </Heading>
    </VStack>
  );
}

export default HeaderTitle;
