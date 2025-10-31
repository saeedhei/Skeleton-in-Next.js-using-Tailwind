"use client";

import React, { useEffect, useState } from "react";
import Skeleton from "./components/Skeleton";
import Image from "next/image";
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div
      className="min-h-screen items-center flex justify-center 
text-white bg-black"
    >
      <div
        className="max-w-lg w-full p-6 rounded-xl bg-gray-900
      shadow-lg"
      >
        {loading ? (
          <Skeleton />
        ) : (
          <div className="w-full p-4 space-y-4">
            <h1 className="text-xl font-bold">Welcome to the Future</h1>
            <p className="text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              quasi in et aliquid recusandae accusamus accusantium sit libero.
            </p>
            <div
              className="w-full h-64 relative bg-gray-700 rounded-lg
            overflow-hidden"
            >
              <Image
                src="./shoe1.webp"
                alt="shoe"
                width={500}
                height={300}
                className="absolute insert-0 w-full object-cover
              transition-opacity duration-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
