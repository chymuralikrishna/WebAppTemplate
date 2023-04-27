import React from "react";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
