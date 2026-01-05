import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const whatsappNumber = "201040550125";
  const message = "Hello Ahmed, I checked your portfolio!";

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer
        whatsappNumber={whatsappNumber}
        message={message}
      />
    </>
  );
}
