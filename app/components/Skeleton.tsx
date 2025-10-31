import React from "react";

const Skeleton = () => {
  return (
    <div
      className="w-full p-4 space-y-4
        anmate-pulse"
    >
      <div
        className="h-6 w-1/3 bg-gradient-to-r from-gray-700
      via-gray-600 to-gray-700 rounded-full"
      />
      <div
        className="h-6 w-full bg-gradient-to-r from-gray-700
      via-gray-600 to-gray-700 rounded-full"
      />
      <div
        className="h-6 w-5/6 bg-gradient-to-r from-gray-700
      via-gray-600 to-gray-700 rounded-full"
      />
      <div
        className="h-64 w-full bg-gradient-to-r from-gray-700
      via-gray-600 to-gray-700 rounded-xl"
      />
    </div>
  );
};

export default Skeleton;
