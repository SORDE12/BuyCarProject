import { Box, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialState = {
  name: "",
  email: "",
  city: "",
  age: "",
  pass: "",
};

const Signupd = () => {
  const [formState, setFormState] = useState(initialState);
  const Navigate = useNavigate();

  const toast = useToast();

  let handleChange = (e) => {
    const val =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setFormState({ ...formState, [e.target.name]: val });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, city, age, pass } = formState;
    console.log(formState);
    if (
      name === "" ||
      email === "" ||
      city === "" ||
      age === "" ||
      pass === ""
    ) {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setFormState({
        ...formState,
        name: "",
        email: "",
        city: "",
        age: "",
        pass: "",
      });
    } else {
      fetch("https://zany-plum-bee-garb.cyclic.app/dealers/register", {
        method: "POST",
        body: JSON.stringify(formState),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((res) => {
          alert("signup success");
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  const { name, email, city, age, pass } = formState;
  return (
    <Box
      m="auto"
      padding="20px"
      width={{ base: "80%", sm: "80%", md: "60%", lg: "50%" }}
    >
      {/* <form onSubmit={handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          USERNAME
          <Input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter Username"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          EMAIL
          <Input
            name="email"
            type="text"
            onChange={handleChange}
            value={email}
            placeholder="Enter Email"
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          CITY
          <Input
            name="city"
            type="text"
            onChange={handleChange}
            value={city}
            placeholder="Enter city name"
          />
        </label>
        <br />
        <br />

        <label>
          {" "}
          AGE
          <Input
            name="age"
            type="number"
            onChange={handleChange}
            value={age}
            placeholder="Enter Age"
          />
        </label>

        <br />
        <br />
        <label>
          {" "}
          PASSWORD
          <Input
            name="pass"
            type="password"
            onChange={handleChange}
            value={pass}
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

export default Signupd;
