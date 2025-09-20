import { memo } from "react";
import Carousel from "./components/carousel";
import Phone from "./components/phone";
import Form from "./components/form";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Form />
      <Phone />
    </>
  );
};

export default memo(App);
