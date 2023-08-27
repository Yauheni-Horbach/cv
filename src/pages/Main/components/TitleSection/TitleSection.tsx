import "./styles.css";
import React from "react";
import { Section } from "../../../../components/Section";
import { HashLink as Link } from "react-router-hash-link";
import { Model } from "../../../../ui/3d/lion/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const TitleSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: { clientX: number; clientY: number }) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Section onMouseMove={handleMouseMove} id="title">
      <div className="Layer">
        <div className="Face">
          <Canvas style={{ borderRadius: "100%" }}>
            <ambientLight intensity={15} />
            <OrbitControls enableZoom={true} />
            <group
              position={[0, -1, 0]}
              scale={[50, 50, 50]}
              rotation={[0, -100, 0]}
            >
              <Model />
            </group>
          </Canvas>
        </div>
        <Link to="/#description">Skills</Link>
      </div>
    </Section>
  );
};
