import "./styles.css";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  onMouseMove?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id?: string;
}

export const Section = ({ children, onMouseMove, id }: SectionProps) => {
  return (
    <div className="Section" onMouseMove={onMouseMove} id={id}>
      {children}
    </div>
  );
};
