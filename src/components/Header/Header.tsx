import { Model } from "../../ui/3d/lion/Scene";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Menu } from "./components";
import { useHeader } from "./useHeader";
import "./styles.css";

export const Header = () => {
  const { onPressMenuButton, isMenuOpen, navigateTo, pageName } = useHeader();

  return (
    <div className="Wrapper">
      <div className="Body">
        <div className="NamePage">
          <p>{pageName}</p>
        </div>
        <div className="Control">
          <div className="Face">
            <Canvas style={{ borderRadius: "100px" }}>
              <ambientLight intensity={15} />
              <OrbitControls enableZoom={true} />
              <group position={[0, -0.5, 0]} scale={[20, 20, 20]}>
                <Model />
              </group>
            </Canvas>
          </div>
          <Menu
            onPressMenuButton={onPressMenuButton}
            isMenuOpen={isMenuOpen}
            navigateTo={navigateTo}
          />
        </div>
      </div>
    </div>
  );
};
