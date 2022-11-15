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
