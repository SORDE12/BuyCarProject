import { Box, Flex, Heading, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { authLoginUser } from "../../redux/Auth/authAction";

const LoginSecLeft = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let navigate = useNavigate();

  let toast = useToast();

  let signinSub = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      pass: pass,
    };
    console.log(obj);

    if (email === "" || pass === "") {
      toast({
        title: "Please enter all data",
        description: "Not added details to all Inputs",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
      setEmail("");
      setPass("");
    } else {
      fetch("https://zany-plum-bee-garb.cyclic.app/dealers/login", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((res) => {
          localStorage.setItem("token", res.token);
          console.log(res);
          alert("login success");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      textAlign="center"
      width={{ base: "90%", sm: "90%", md: "100%", lg: "50%" }}
      marginX="auto"
      margin="auto"
    >
      <Heading mt="10px" mb="26px">
        Sign In
      </Heading>

      <Text fontSize="16px" textAlign="left" pl="30px">
        If you already have an account with us, sign in below
      </Text>
      <form onSubmit={signinSub}>
        <Box textAlign="left" pl="30px">
          <Text fontSize="16px">Email Address</Text>
          <Input
            type="email"
            w="300px"
            mt="10px"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email ID"
          />
        </Box>
        <Box textAlign="left" pl="30px" mt="15px">
          <Text fontSize="16px">Password</Text>
          <Input
            type="password"
            w="300px"
            mt="10px"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Enter Password"
          />
        </Box>
        <Flex>
          <Text textAlign="left" pl="30px" mt="15px" color="blue">
            Forget Password?
          </Text>
        </Flex>
        <Input
          mt="15px"
          mb="15px"
          width="300px"
          color="white"
          backgroundColor="black"
          type="submit"
        />
      </form>
    </Box>
  );
};

export default LoginSecLeft;
