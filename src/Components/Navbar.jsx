import {
  Box,
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [statusD, setStatusD] = useState(false);
  const [statusU, setStatusU] = useState(false);

  let handleLogoutD = () => {
    setStatusD("false");
  };

  let handleLogoutU = () => {
    setStatusU("false");
  };

  return (
    <Box backgroundColor="gray" width="100%" height="50px">
      <Flex
        flexDirection={{ base: "row", sm: "row", md: "row", lg: "row" }}
        justifyContent="space-around"
        alignItems="center"
      >
        <Link to="/">
          <Image src={logo} alt="logo" width="100px" height="50px" />
        </Link>

        <Link to="/oem">
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            OEM
          </Text>
        </Link>
        <Link to="/cars">
          <Text
            _hover={{
              cursor: "pointer",
              textDecoration: "underline",
              color: "blue",
            }}
          >
            Dealers
          </Text>
        </Link>
        <Box width="35px" height="35px">
          <Popover trigger="hover" placement="bottom-end">
            <PopoverTrigger>
              <Image
                _hover={{
                  cursor: "pointer",
                }}
                width={{ base: "80%", sm: "80%", md: "100%", lg: "100%" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.21a/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw8f5c8e40/images/svg-icons/UI-MyAccount.svg?yocs=o_s_"
                alt="user login"
              />
            </PopoverTrigger>
            <PopoverContent borderRadius="none" width={"200px"}>
              <PopoverBody
                sx={{
                  padding: "20px 10px",
                  margin: "0px",
                  textAlign: "left",
                }}
              >
                <ul>
                  {statusD ? (
                    <li onClick={handleLogoutD}>Logout Dealer</li>
                  ) : null}
                </ul>
                <ul>
                  <Link to="/logind">
                    <li>Login as Dealer</li>
                  </Link>
                </ul>
                <br />
                <ul>
                  {statusU ? (
                    <li onClick={handleLogoutU}>Logout User</li>
                  ) : null}
                </ul>
                <ul>
                  <Link to="/loginu">
                    <li>Login as User</li>
                  </Link>
                </ul>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
