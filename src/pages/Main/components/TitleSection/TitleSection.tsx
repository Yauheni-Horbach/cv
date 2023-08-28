import { HashLink as Link } from "react-router-hash-link";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { ScrollIcon } from "../../../../components/ScrollIcon";
import { Section } from "../../../../components/Section";
import { Model } from "../../../../ui/3d/lion/Scene";

import "./styles.css";

export const TitleSection = () => {
  return (
    <Section id="title">
      <div className="layer">
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
        <Link to="/#description">Skills</Link>
        <ScrollIcon />
      </div>
    </Section>
  );
};
