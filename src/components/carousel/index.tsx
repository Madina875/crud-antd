import { memo } from "react";
import { Carousel } from "antd";

const CarouselHero = () => {
  return (
    <Carousel autoplay>
      <div>
        <h3 className="bg-gray-200  h-50 text-black flex items-center justify-center text-2xl">
          1
        </h3>
      </div>
      <div>
        <h3 className="bg-gray-200  h-50 text-black flex items-center justify-center text-2xl">
          2
        </h3>
      </div>
      <div>
        <h3 className="bg-gray-200  h-50 text-black flex items-center justify-center text-2xl">
          3
        </h3>
      </div>
      <div>
        <h3 className="bg-gray-200  h-50 text-black flex items-center justify-center text-2xl">
          4
        </h3>
      </div>
    </Carousel>
  );
};

export default memo(CarouselHero);
