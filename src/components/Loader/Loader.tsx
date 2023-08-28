import * as React from "react";

import "./styles.css";

interface LoaderProps {
  isVisible: boolean;
  text?: string;
}

export const Loader: React.FC<LoaderProps> = ({ isVisible, text = "" }) => {
  const [loadingText, setLoadingText] = React.useState(text);

  React.useEffect(() => {
    if (text !== loadingText) {
      setLoadingText(text);
    }
  }, [text]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`loader ${isVisible ? "stop-scrolling" : ""}`}>
      {!!loadingText && <p>{loadingText}</p>}
    </div>
  );
};
