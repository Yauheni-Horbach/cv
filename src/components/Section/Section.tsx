import "./styles.css";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Section = ({ children, onMouseMove }: SectionProps) => {
  return (
    <div className="Section" onMouseMove={onMouseMove}>
      {children}
    </div>
  );
};
