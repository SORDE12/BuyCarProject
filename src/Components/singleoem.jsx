import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Singleoem = () => {
  return (
    <Box
      m="auto"
      mt="15px"
      //width="300px"
      w={{ base: "220px", sm: "220px", md: "220px", lg: "250px" }}
      p="10px"
      border="1px solid #E5E4E2"
      backgroundColor="#FFFFFF"
      borderRadius="15px"
    >
      <Flex justifyContent="space-between">
        <Heading mt="15px" px={2} fontSize="16px">
          5
        </Heading>

        <Image
          boxSize="50px"
          mt="8px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYfeXX39cR7pik2P332vU2MovtChCmeHBAQ&usqp=CAU"
        />
      </Flex>

      <Text px={2}>1</Text>
      <Text px={2}>Actual Price : 2</Text>
      <Text px={2}>Discount Price : 3</Text>
      <Box px={2} display="flex" mt="2" alignItems="center">
        4
      </Box>
    </Box>
  );
};

export default Singleoem;
