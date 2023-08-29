/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { ScrollIcon } from "../../../../components/ScrollIcon";
import { Section } from "../../../../components/Section";
import { Model } from "../../../../ui/3d/lion/Scene";

import "./styles.css";

export const TitleSection = () => {
  const [textShadowHigh, setTextShadowHigh] = React.useState("");
  const [textShadowLow, setTextShadowLow] = React.useState("");

  function handleMouseMove(e: any, setTextShadow: (shadow: string) => void) {
    const rXP = e.pageX - e.target.offsetLeft - e.target.offsetWidth / 2.5;
    const rYP = e.pageY - e.target.offsetTop - e.target.offsetHeight / 2.5;

    setTextShadow(
      `${rYP / 20}px ${rXP / 50}px rgba(227, 6, 19, 0.8), ` +
        `${rYP / 8}px ${rXP / 60}px rgba(255, 237, 0, 1), ` +
        `${rXP / 70}px ${rYP / 12}px rgba(0, 159, 227, 0.7)`
    );
  }

  return (
    <Section id="title">
      <div className="layer">
        <div className="title-info">
          <h1
            onMouseMove={(event) => handleMouseMove(event, setTextShadowHigh)}
            style={{ textShadow: textShadowHigh }}
          >
            Hi, I am Yauheni
          </h1>
          <h2
            onMouseMove={(event) => handleMouseMove(event, setTextShadowLow)}
            style={{ textShadow: textShadowLow }}
          >
            Fullstack Web Developer
          </h2>
        </div>
        <div className="face">
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
      </div>
      <div className="scroll-icon">
        <Link to="/#description">
          <ScrollIcon />
        </Link>
      </div>
    </Section>
  );
};
