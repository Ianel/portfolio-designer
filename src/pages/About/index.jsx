import React, { useEffect } from "react";
import Avatar from "../../components/Avatar";
import { AboutCardMain, AboutCardSecondary, AboutCardTertiary } from "../../components/Card/AboutCard";
import Input from "../../components/Input";
import LoginForm from "../../components/LoginForm";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states";

const AboutPage = () => {
  useEffect(() => {
    states.selectedLink = "about";
  }, []);

  return (
    <MainLayout>
     <div className="flex flex-row">
        <div className="w-3/4">
          <div className="flex lg:flex-row m-8 lg:justify-between">
            <h1 className="text-[#2b2535] text-xl font-bold">Lorem ipsum</h1>
            <div className="flex lg:flex-row">
              <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
              <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
              <div className=" ml-6 w-4 h-4 bg-[#2b2535] rounded-full"></div>
            </div>
          </div>
          <div className="mx-8 mt-20 bg-[#f3f1ef] flex flex-row items-center rounded-xl">
            <div className="w-full ">
              {
                ["1", "2"].map((_, index) => {
                  return <AboutCardTertiary border key={Date.now().toFixed(2) + index} />
                })
              }
              <AboutCardTertiary />
            </div>
            <div className="w-1 h-24 bg-white"></div>
              <div className="w-full ">
              {
                ["1", "2"].map((_, index) => {
                  return <AboutCardTertiary border key={Date.now().toFixed(7) + index} />
                })
              }
              <AboutCardTertiary />
            </div>
          </div>
          <div className="mx-8 mt-10">
            <h2 className="my-4 text-xl font-bold text-[#342e3e]">Lorem ipsum</h2>
            <h3 className="text-[#ccc4bf] text-sm font-semibold">Lorem ipsum</h3>
            <div className="mt-4 flex justify-between gap-x-10">
              <AboutCardMain />
              {
                ["1", "2", "3"].map((_, index) => {
                  return <AboutCardSecondary key={Date.now().toFixed(8) + index} />;
                })
              }
            </div>
          </div>
        </div>
      <div className="w-1/4 bg-[#d59d4c] h-full"></div>
     </div>
    </MainLayout>
  );
};

export default AboutPage;
