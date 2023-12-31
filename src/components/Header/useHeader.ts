import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useGlobalLoader } from "../Loader";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { show } = useGlobalLoader();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateTo = (path: string) => {
    show();
    navigate(path);
    setIsMenuOpen(false);
  };

  return {
    onPressMenuButton: toggleMenu,
    navigateTo,
    isMenuOpen,
    pageName: location.pathname.split("/")[1] || "main",
  };
};
