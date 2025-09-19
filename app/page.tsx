import React from "react";
import Image from "next/image";
import hao from "@/assets/images/hao.png";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-[300px] w-[95%] py-12 rounded-lg">
        <h2 className="font-bold text-3xl text-primary-text">登陆</h2>
        <button className="bg-white w-full mt-8 h-10 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full">
          <Image
            src={hao}
            alt="薅羊毛"
            width={470}
            height={470}
            className="w-6 h-6 object-cover"
          />
          <span>登陆</span>
        </button>
      </div>
    </div>
  );
}
