import React from "react";
import Image from "next/image";
import hao from "@/assets/images/hao.png";
export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-[300px] w-[95%] py-12 rounded-lg">
        <h2 className="font-bold text-center text-3xl text-primary-text">选择登陆方式</h2>
        <button className="bg-white w-full mt-8 h-10 flex justify-center items-center gap-2 cursor-pointer hover:bg-gray-200 rounded-full">
          <Image
            src={hao}
            alt="薅羊毛"
            width={470}
            height={470}
            className="w-6 h-6 object-cover"
          />
          <span>Github</span>
        </button>
        <div className="flex justify-center items-center my-6">
          <div className="flex-grow h-px bg-border"></div>
          <span className="mx-4 text-md text-primary-text">或</span>
          <div className="flex-grow h-px bg-border"></div>
        </div>
        <input
          type="text"
          placeholder="手机，账号，邮箱"
          className="w-full bg-background outline-none rounded-md p-4 placeholder-secondary-text border border-border"
        />
        <button className="flex justify-center items-center w-full font-medium rounded-full">
          提交
        </button>
      </div>
    </div>
  );
}
