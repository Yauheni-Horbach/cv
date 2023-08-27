import "./styles.css";
import { Header } from "../../components/Header";
import { DescriptionSection, TitleSection } from "./components";
import React from "react";

export const Main = () => {
  const [isFaceInSection, setIsFaceInSection] = React.useState(true);

  return (
    <div onClick={() => setIsFaceInSection(false)}>
      <Header />
      <TitleSection />
      <DescriptionSection />
    </div>
  );
};
