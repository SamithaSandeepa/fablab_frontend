import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-5 mt-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
