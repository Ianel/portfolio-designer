import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { test } from "../../assets/images/images";

const MainCard = () => {
  return (
    <>
      {/* <img src={test} /> */}
      <div className="w-full my-8 p-6 rounded-[12px] bg-[#f9cca7]">
        <div className="flex lg:flex-row lg:justify-between lg:items-center">
          <p className="bg-[#826e65] w-10 h-10 rounded-[6px]"></p>
          <MdMoreHoriz />
        </div>
        <div className="w-full h-8"></div>
        <h2 className="text-[#413b49] font-bold text-lg">Lorem ipsum</h2>
        <div className="flex lg:flex-row mt-1">
          <p className="w-8 h-8 rounded-full bg-[#3e3847]"></p>
          <p className="w-8 h-8 rounded-full bg-[#c79b77] -ml-3"></p>
          <p className="w-8 h-8 rounded-full bg-[#826e65] -ml-3"></p>
        </div>
      </div>
    </>
  );
};

const SecondaryCard = () => {
  return (
    <div className="p-5 border-2 border-[#ede9e8] w-full rounded-[12px]">
      <div className="w-12 h-12 grid place-items-center bg-[#f9cca7] rounded-[6px]">
        <div className="w-4 h-4 bg-white"></div>
      </div>
      <h3 className="mt-7 text-sm text-[#93837b]">Lorem ipsum</h3>
      <p className="text-xl text-[#3a3443] font-bold mb-5">44,22</p>
      <p className="text-[12px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis et
        accusantium sunt dolorum eveniet, aperiam magni doloribus cupiditate ut
        laboriosam illum non,
      </p>
    </div>
  );
};

const TertiaryCard = () => {
  return (
    <div className="w-full rounded-[18px] border-2 border-[#ede9e8]">
      <div className="px-6 py-3 flex lg:flex-row lg:justify-between lg:items-center">
        <h2>Lorem ipsum</h2>
        <MdMoreHoriz />
      </div>
      <div className="px-6 flex lg:flex-row lg:items-center bg-[#faf9f9]">
        <div className="w-12 h-12 rounded-[9px] bg-[#d59d4c]"></div>
        <div className="p-4">
          <h4 className="text-sm text-[#93837b]">Lorem ipsum</h4>
          <p className="text-[#2b2435] font-semibold">100%</p>
        </div>
      </div>
      {["a", "b", "c"].map((_, index) => {
        return (
          <div key={Date.now().toFixed(4) + index} className="px-6 flex lg:flex-row lg:items-center">
            <div className="w-12 h-12 rounded-[9px] bg-[#d59d4c]"></div>
            <div className="p-4">
              <h4 className="text-sm text-[#93837b]">Lorem ipsum</h4>
              <p className="text-[#2b2435] font-semibold">100%</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const QuarterCard = () => {
  return (
    <div className="flex p-4 w-full border-2 border-[#ede9e8] rounded-[12px]">
      <div className="w-12 h-12 rounded-full bg-[#d59d4c]"></div>
      <div className="px-4">
        <h3 className="text-[#93837b]">Lorem ipsum</h3>
        <p className="text-[#3a3443] font-bold">44,22</p>
      </div>
    </div>
  );
};

export { MainCard, SecondaryCard, TertiaryCard, QuarterCard };
