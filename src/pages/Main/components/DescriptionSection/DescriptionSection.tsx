import "./styles.css";
import React from "react";
import { Section } from "../../../../components/Section";

export const DescriptionSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Section onMouseMove={handleMouseMove} id="description">
      <div className="Layer Bottom-layer">
        {mousePosition.x} {mousePosition.y}
        <div
          className="Window"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        ></div>
      </div>
      <div
        className="Layer Top-layer"
        style={{
          clipPath: `circle(100px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
      >
        Hello
      </div>
    </Section>
  );
};
