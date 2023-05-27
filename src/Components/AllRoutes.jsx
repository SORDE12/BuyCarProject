import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dealers from "../pages/Dealers";
import Logind from "../pages/Logind";
import Signupd from "../pages/Signupd";
import Oem from "../pages/Oem";
import Loginu from "../pages/Loginu";
import Signupu from "../pages/Signupu";
import AddCar from "../pages/AddCar";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/oem" element={<Oem />} />
      <Route path="/cars" element={<Dealers />} />
      <Route path="/cars/create" element={<AddCar />} />
      <Route path="/logind" element={<Logind />} />
      <Route path="/signupd" element={<Signupd />} />
      <Route path="/loginu" element={<Loginu />} />
      <Route path="/signupu" element={<Signupu />} />
    </Routes>
  );
};

export default AllRoutes;
