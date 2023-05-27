import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";



const Home = () => {
  return (
    <div>
      <Box m="auto" w="85%" mt="50px">
        <Image
          src="https://digitalsynopsis.com/wp-content/uploads/2014/06/supercar-wallpapers-bugatti-4.jpg"
          alt="err"
        />
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
