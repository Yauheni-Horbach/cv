import React, { ReactNode } from "react";

import { useGlobalLoader } from "../Loader";

import "./styles.css";

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const { hide, show, isVisible } = useGlobalLoader();

  React.useEffect(() => {
    if (isVisible) {
      hide();
    } else {
      show().then(() => {
        hide();
      });
    }
  }, []);

  return (
    <div className="page-wrapper">
      <>{children}</>
    </div>
  );
};
