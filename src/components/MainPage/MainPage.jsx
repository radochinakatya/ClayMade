import React from 'react';
import { Button } from "../Button";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Collage } from "./Collage/Collage.jsx";
import { Form } from "./Form/Form.jsx";
import { Slider } from "./Slider/Slider.jsx";

const MainPage = () => {
  return (
    <div className="MainPage">
      <Header />
      <Slider />
      <Collage />
      <Button />
      <Form />
      <Footer />
    </div>
  );
};

export default MainPage;