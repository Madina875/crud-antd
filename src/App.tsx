import { memo } from "react";
import Carousel from "./components/carousel";
import Form from "./components/form";
import Header from "./components/header";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Form />
    </>
  );
};

export default memo(App);
