import "./styles.css";
import { Navigate } from "react-router-dom";

interface MenuProps {
  isMenuOpen: boolean;
  onPressMenuButton: () => void;
  navigateTo: (path: string) => void;
}

export const Menu = ({
  isMenuOpen,
  onPressMenuButton,
  navigateTo,
}: MenuProps) => {
  return (
    <div className={`menu ${isMenuOpen ? "expanded" : ""}`}>
      <div
        className={`container ${isMenuOpen ? "close" : ""}`}
        onClick={onPressMenuButton}
      >
        <div className={`toggle ${isMenuOpen ? "close" : ""}`}></div>
      </div>
      <span
        className={isMenuOpen ? "" : "hidden"}
        onClick={() => navigateTo("/")}
      >
        <p>Main</p>
      </span>
      <span
        className={isMenuOpen ? "" : "hidden"}
        onClick={() => navigateTo("/portfolio")}
      >
        <p>Portfolio</p>
      </span>
      <span
        className={isMenuOpen ? "" : "hidden"}
        onClick={() => navigateTo("/feedback")}
      >
        <p>FeedBack</p>
      </span>
      <span
        className={isMenuOpen ? "" : "hidden"}
        onClick={() => navigateTo("/skills")}
      >
        <p>Skills</p>
      </span>
    </div>
  );
};
