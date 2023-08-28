import { Menu } from "./components";
import { useHeader } from "./useHeader";

import "./styles.css";

export const Header = () => {
  const { onPressMenuButton, isMenuOpen, navigateTo, pageName } = useHeader();

  return (
    <div className="wrapper">
      <div className="body">
        <div className="name-page">
          <p>{pageName}</p>
        </div>
        <div className="control">
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
