import React from 'react'
import { Box, Flex, Text } from "@chakra-ui/react";
import LoginSecLeft from '../Components/LoginComp/LoginSecLeft';
import LoginSecRight from '../Components/LoginComp/LoginSecRight';


const Logind = () => {
  return (
    <Box
      margin="auto"
      
      width={{ base: "95%", sm: "95%", md: "80%", lg: "70%" }}
    >
      <Text
        mt="15px"
        mb="15px"
        fontSize="22px"
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        mx="auto"
      >
        Sign In or Sign Up
      </Text>
      <Box
        width={{ base: "90%", sm: "90%", md: "95%", lg: "100%" }}
        border="1px solid black"
        mb="15px"
        mx="auto"
      ></Box>
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-around"
      >
        <LoginSecLeft/>
        <LoginSecRight />
      </Flex>
    </Box>
  )
}

export default Logind