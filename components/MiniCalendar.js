import { Box } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

function MiniCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <Box
      className="calendarContainer"
      bg="bcPrimary.ice"
      shadow="base"
      borderRadius="5px"
      p={["1rem 0", "1.25rem"]}
    >
      <Calendar onChange={onChange} value={value} />
    </Box>
  );
}

export default MiniCalendar;

// import { Box, Icon, Text } from "@chakra-ui/react";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";

// function MiniCalendar() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <Box>
//       <Calendar
//         onChange={onChange}
//         value={value}
//         prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
//         nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
//       />
//     </Box>
//   );
// }

// export default MiniCalendar;

// h="100%" minW="100%" selectRange={false}

// import { useState } from "react";
// import Calendar from "react-calendar";
// import { Text, Icon, Flex } from "@chakra-ui/react";
// // Chakra imports
// import { MdChevronLeft, MdChevronRight } from "react-icons/md";
// import "react-calendar/dist/Calendar.css";

// export default function MiniCalendar(props) {
//   const { selectRange, ...rest } = props;
//   const [value, onChange] = useState(new Date());
//   return (
//     <Flex
//       alignItems="center"
//       flexDirection="column"
//       w="100%"
//       maxW="max-content"
//       p="20px 15px"
//       h="max-content"
//       {...rest}
//     >
//       <Calendar
//         onChange={onChange}
//         value={value}
//         selectRange={selectRange}
//         view={"month"}
//         tileContent={<Text color="bcPrimary.sea" />}
//         prevLabel={<Icon as={MdChevronLeft} w="24px" h="24px" mt="4px" />}
//         nextLabel={<Icon as={MdChevronRight} w="24px" h="24px" mt="4px" />}
//       />
//     </Flex>
//   );
// }
