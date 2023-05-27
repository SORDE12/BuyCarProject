import { Box, Button, Flex, Heading, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialState = {
  url: "",
  title: "",
  price: "",
  color: "",
  mileage: "",
};

const AddCar = () => {
  const [carState, setCarState] = useState(initialState);
  const [image, setImage] = useState("");
  const Navigate = useNavigate();

  const toast = useToast();

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setCarState({ ...carState, [e.target.name]: val });
  };

  let uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gvbxzzst");
    data.append("cloud_name", "dfxgyin6i");

    fetch("https://api.cloudinary.com/v1_1/dfxgyin6i/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.url);
        alert(`url created ${res.url}`);
      })

      .catch((err) => console.log(err));
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { url, title, price, color, mileage } = carState;
    console.log(carState);
    if (
      url === "" ||
      title === "" ||
      price === "" ||
      color === "" ||
      mileage === ""
    ) {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setCarState({
        ...carState,
        url: "",
        title: "",
        price: "",
        color: "",
        mileage: "",
      });
    } else {
      fetch("https://zany-plum-bee-garb.cyclic.app/car/create", {
        method: "POST",
        body: JSON.stringify(carState),
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          alert("added car successfully")
        })
        .catch((err) => console.log(err));
    }
  };

  const { url, title, price, color, mileage } = carState;
  return (
    <Box
      m="auto"
      padding="20px"
      width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
    >
      <Heading mb="20px">Add Second Hand Cars</Heading>
      {/* <form onSubmit={handleSubmit}> */}
      <label>
        {" "}
        UPLOAD IMAGE
        <Flex>
          <Input
            name="name"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            placeholder="Add Image"
          />
          <Button onClick={uploadImage}>Upload Image</Button>
        </Flex>
      </label>
      <br />
      <br />
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
    </Box>
  );
};

export default AddCar;
