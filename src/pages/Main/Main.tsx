import "./styles.css";
import { Header } from "../../components/Header";
import { DescriptionSection, TitleSection } from "./components";
import React from "react";

export const Main = () => {
  return (
    <div>
      <Header />
      <TitleSection />
      <DescriptionSection />
    </div>
  );
};
