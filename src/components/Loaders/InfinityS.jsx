import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const InfinityS = () => {
  return (
    <div className="flex justify-center items-center">
      <InfinitySpin color="#00BFFF" height={5500} width={800} />
    </div>
  );
};

export default InfinityS;
