import "./styles.css";
import React from "react";
import { Section } from "../../../../components/Section";

export const TitleSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Section onMouseMove={handleMouseMove}>
      <div></div>
    </Section>
  );
};
