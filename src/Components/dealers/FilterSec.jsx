import React from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FilterSec = () => {
  return (
    <Box width={{ base: "99%", sm: "99%", md: "35%", lg: "25%" }}>
      <Box pl="25px">
        <Link to="/cars/create">
          <Button m="20px">Add Cars</Button>
        </Link>
        <Heading mb="20px" fontSize="25px">
          Filter by Cars
        </Heading>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Fine Fragrance Mist"
            // checked={category.includes("Fine Fragrance Mist")}
            // onChange={handleFilterChange}
          />
          <Text>Fine Fragrance Mist</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Body_Lotion"
            // checked={category.includes("Body_Lotion")}
            // onChange={handleFilterChange}
          />
          <Text>Body_Lotion</Text>
        </Flex>

        <Flex gap={1}>
          <input
            type="checkbox"
            value="Shea Butter Cleansing Bar"
            // checked={category.includes("Shea Butter Cleansing Bar")}
            // onChange={handleFilterChange}
          />
          <Text>Shea Butter Cleansing Bar</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterSec;
