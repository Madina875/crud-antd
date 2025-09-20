import { memo } from "react";
import Carousel from "./components/carousel";
import Phone from "./components/phone";
import Form from "./components/form";

const App = () => {
  return (
    <>
      <Carousel />
      <Form />
      <Phone />
    </>
  );
};

export default memo(App);
