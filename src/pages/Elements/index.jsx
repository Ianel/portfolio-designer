import React from "react";
import { MainCard, SecondaryCard, TertiaryCard } from "../../components/Card";
import Avatar from "../../components/Avatar";
import { MainLayout } from "../../layouts/main";
import { test } from "../../assets/images/images";
import { AboutCardMain, AboutCardQuaternary, AboutCardSecondary, AboutCardTertiary } from "../../components/Card/AboutCard";

const ElementsPage = () => {
  return (
    <MainLayout>
      <MainCard />
      <SecondaryCard />
      <TertiaryCard />
      <Avatar className="m-8" size="lg" />
      <img src={test} alt="" />
      <AboutCardMain />
      <div className="h-24"></div>
      <AboutCardSecondary />
      <div className="h-24"></div>
      <AboutCardTertiary />
      <AboutCardQuaternary />
    </MainLayout>
  );
};

export default ElementsPage;
