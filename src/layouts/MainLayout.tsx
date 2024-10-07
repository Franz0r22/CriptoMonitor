import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "../Components/NavBar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="main-layout">
      <NavBar />
      <Container className="content">
        {children || <Outlet />}
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
