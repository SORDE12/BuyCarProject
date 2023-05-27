import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";

const SingleCar = ({
  url,
  title,
  color,
  price,
  _id,
  mileage,
  fetchCarsAndUpdate,
}) => {
  let handleDelete = (id) => {
    try {
      fetch(`https://zany-plum-bee-garb.cyclic.app/car/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("car deleted successfully");
          fetchCarsAndUpdate();
        });
    } catch (err) {
      console.log(err);
    }
  };
    let handleChange = (e) => {
  //   const val =
  //     e.target.type === "checkbox" ? e.target.checked : e.target.value;

  //   setCarState({ ...carState, [e.target.name]: val });
   };
   let handleSubmit=()=>{
    
   }

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
          {title}
        </Heading>

        <Image
          boxSize="50px"
          mt="8px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYfeXX39cR7pik2P332vU2MovtChCmeHBAQ&usqp=CAU"
        />
      </Flex>
      <Center>
        <Image boxSize="150px" mt="8px" src={url} />
      </Center>

      <Text px={2}>Price : {price}</Text>
      <Text px={2}>Color :{color}</Text>
      <Text px={2}>Mileage :{mileage}</Text>
      <Flex flexDirection="row" justifyContent="space-around">
        <Box>
          <Popover>
            <PopoverTrigger>
              <Button>Update</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Update Car Data</PopoverHeader>
              <PopoverBody>
              <form onSubmit={handleSubmit}>
        <label>
          {" "}
          IMAGE
          <Input
            name="url"
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="Add URL"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          TITLE
          <Input
            name="title"
            type="text"
            onChange={handleChange}
            value={title}
            placeholder="Enter Title"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          PRICE
          <Input
            name="price"
            type="number"
            onChange={handleChange}
            value={price}
            placeholder="Enter Price"
          />
        </label>
        <br />
        <br />

        <label>
          {" "}
          COLOR
          <Input
            name="color"
            type="text"
            onChange={handleChange}
            value={color}
            placeholder="Enter Colors"
          />
        </label>

        <br />
        <br />
        <label>
          {" "}
          MILEAGE
          <Input
            name="mileage"
            type="text"
            onChange={handleChange}
            value={mileage}
            placeholder="Enter Password"
          />
        </label>
        <br />
        <br />
        <Input
          color="white"
          backgroundColor="black"
          type="submit"
          value="submit"
        />
      </form>
                
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
        <Button onClick={() => handleDelete(_id)}>Delete Car</Button>
      </Flex>
    </Box>
  );
};

export default SingleCar;
