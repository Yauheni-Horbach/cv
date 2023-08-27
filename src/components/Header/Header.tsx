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
