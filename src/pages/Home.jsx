import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export let crousalData = [
  {
    id: 1,
    heading: "HONDA",
    desc: "ALL @ zdi to vxi",
  },
  {
    id: 2,
    heading: "NISSSAN",
    desc: "ALL @ zdi to vxi",
  },
  {
    id: 3,
    heading: "SUZUKI",
    desc: "ALL @ low to high",
  },
  {
    id: 4,
    heading: "TATA",
    desc: "ALL @ t1 to t7",
  },
  {
    id: 5,
    heading: "BMW",
    desc: "ALL @ es6 to es9",
  },
  {
    id: 6,
    heading: "CIZAS",
    desc: "ALL @ gj2 to egj5",
  },
  {
    id: 7,
    heading: "TAKEN",
    desc: "mountain trecker",
  },
  {
    id: 8,
    heading: "HUMMER",
    desc: "desert live",
  },
  {
    id: 9,
    heading: "TOYOTA",
    desc: "mountain cracker",
  },

  {
    id: 10,
    heading: "JASKS",
    desc: "desert live",
  },
  {
    id: 11,
    heading: "BODY CARE",
    desc: "ALL @ G4G2/B3G1",
  },
  {
    id: 12,
    heading: "HAND SOAPS",
    desc: "Buy 4 @ ₹2499",
  },
];
const Home = () => {
  return (
    <div>
      <Box m="auto" w="85%" mt="50px">
        <Image
          src="https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg"
          alt="err"
        />
      </Box>
      <Box m="auto" p="10px" w="85%" mt="50px" bg="#FFB52E">
        <Center>
          <Heading m="15px" fontSize="24px">
            TODAY'S TOP OFFERS
          </Heading>
        </Center>

        <Carousel responsive={responsive}>
          {crousalData.map((e) => (
            <Box
              bg="#FDFEFF"
              borderRadius="15px"
              border="1px solid #cacbcc"
              key={e.id}
            >
              <Center>
                <Heading mt="15px" fontSize="20px">
                  {e.heading}
                </Heading>
              </Center>
              <Center>
                <Text mt="10px">{e.desc}</Text>
              </Center>
              <Center>
                <Button
                  _hover={{
                    color: "#000933",
                    textDecor: "underline",
                    bg: "#fcc12e",
                  }}
                  mt="10px"
                  mb="15px"
                  color="#FFFFFF"
                  bg="#333333"
                >
                  Shop
                </Button>
              </Center>
            </Box>
          ))}
        </Carousel>
      </Box>
      <Box m="auto" w="85%" mt="50px">
        <Image
          width="100%"
          src="https://mcdn.wallpapersafari.com/medium/1/53/x0szwB.jpg"
          alt="err"
        />
      </Box>
    </div>
  );
};

export default Home;
