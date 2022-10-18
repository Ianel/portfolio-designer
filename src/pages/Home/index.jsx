import React, { useEffect } from "react";
import {
  MainCard,
  QuarterCard,
  SecondaryCard,
  TertiaryCard,
} from "../../components/Card";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states";

export const HomePage = () => {
  useEffect(() => {
    states.selectedLink = "accueil";
  }, []);

  return (
    <MainLayout>
      <div className="flex lg:flex-row m-8 lg:justify-between">
        <h1 className="text-[#2b2535] text-xl font-bold">Lorem ipsum</h1>
        <div className="flex lg:flex-row">
          <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
          <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
          <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
        </div>
      </div>
      <div className="flex lg:flex-row lg:justify-between gap-x-8 mx-8">
        {[1, 2, 3].map((_, index) => {
          return <MainCard key={Date.now().toFixed(6) + index} />;
        })}
      </div>
      <div className="mx-8">
        <h2 className="text-[#2b2535] text-xl font-bold">Lorem ipsum</h2>
        <div className="gap-x-8 flex lg:flex-row lg:justify-between lg:items-stretch">
          <div className="w-2/3 mt-4">
            <div className="flex lg:flex-row lg:justify-between gap-x-8">
              {[1, 2].map((_, index) => {
                return <QuarterCard key={Date.now().toFixed(7) + index} />;
              })}
            </div>
            <div className="flex lg:flex-row lg:justify-between gap-x-8 lg:items-center mt-8">
              {[1, 2, 3].map((_, index) => {
                return <SecondaryCard key={Date.now().toFixed(8) + index} />;
              })}
            </div>
          </div>
          <div className="w-1/3 mt-4 grid">
            <TertiaryCard />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
