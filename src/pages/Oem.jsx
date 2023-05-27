import { Box, Flex, Input, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Singleoem from "../Components/singleoem";
import Pagination from "../Components/Pagination";
let products = [
  {
    name: "honda",
    year: "2015",
    price: 2541,
    colors: ["red", "green", "yellow"],
    mileage: 25,
    manufacturedBy: "Honda Cars",
    power: 25,
    maxspeed: 1145,
  },
  {
    name: "maruti suzuki",
    year: "2015",
    price: 2541,
    colors: ["red", "green", "yellow"],
    mileage: 25,
    manufacturedBy: "maruti suzuki Cars",
    power: 25,
    maxspeed: 1145,
  },
];

const Oem = () => {
  const [page, setPage] = useState(1);

  let handleChange = (p) => {
    setPage(p);
  };
  let totalPage;
  if (products.length < 9) {
    totalPage = true;
  }

  return (
    <Box>
      <Flex
        m="5px"
        flexDirection="row"
        gap="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Text width="100px">Search Cars</Text>{" "}
        <Input width="250px" border="2px solid gray" placeholder="search car" />
      </Flex>
      <Box width={{ base: "99%", sm: "99%", md: "65%", lg: "75%" }}>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap={2}>
          {products && products.map((e) => <Singleoem key={e.id} {...e} />)}
        </SimpleGrid>
        <Pagination
          handleChange={handleChange}
          page={page}
          totalPage={totalPage}
        />
      </Box>
    </Box>
  );
};

export default Oem;
