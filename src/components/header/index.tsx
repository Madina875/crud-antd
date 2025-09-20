import { memo } from "react";

const Header = () => {
  return (
    <div className="w-full h-10 bg-white  flex items-center">
      <p className="text-2xl">LOGOO</p>
    </div>
  );
};

export default memo(Header);
