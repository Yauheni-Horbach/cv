import "./styles.css";

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
      {["/", "/portfolio", "/feedback", "/skills"].map((path, index) => (
        <span
          key={index}
          className={isMenuOpen ? "" : "hidden"}
          onClick={() => navigateTo(path)}
        >
          <p>
            {path === "/"
              ? "Main"
              : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </p>
        </span>
      ))}
    </div>
  );
};
