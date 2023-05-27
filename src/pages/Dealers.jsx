import React, { useEffect, useState } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import FilterSec from "../Components/dealers/FilterSec";
import SingleCar from "../Components/dealers/SingleCar";
import PaginationD from "../Components/dealers/PaginationD";
import { getCars } from "../Components/ApiRequest";

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




const Dealers = () => {
  const [page, setPage] = useState(1);
  const [cars,setCars]=useState([])
  const [loading,setLoading] = useState(false)

  let fetchCarsAndUpdate=async()=>{
    setLoading(true)
    try{
      let res=await getCars()
      setCars(res)
      setLoading(false)
    }catch(err){
      console.log(err)
      setLoading(false)
    }

  }
  


  useEffect(()=>{
    fetchCarsAndUpdate()
  },[])

  

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
        width="95%"
        gap={2}
        margin="auto"
        flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
      >
        <FilterSec />
        <Box width={{ base: "99%", sm: "99%", md: "65%", lg: "75%" }}>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 4 }} gap={2}>
            {cars && cars.map((e) => <SingleCar key={e._id} {...e} fetchCarsAndUpdate={fetchCarsAndUpdate} />)}
          </SimpleGrid>
          <PaginationD
            handleChange={handleChange}
            page={page}
            totalPage={totalPage}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dealers;
