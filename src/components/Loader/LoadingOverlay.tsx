import * as React from "react";

import { Loader } from "./Loader";
import { LoadingContext } from "./LoadingContext";

import "./styles.css";

export const LoadingOverlay: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [loadingText, setLoadingText] = React.useState<string>("");

  const animationPromiseResolver = React.useRef<(() => void) | undefined>(
    undefined
  );

  const context = React.useMemo(
    () => ({
      show: (text: string = "Loading") => {
        animationPromiseResolver.current?.();

        setLoadingText(text);
        setIsVisible(true);

        document.body.classList.add("stop-scrolling");

        return new Promise<void>((resolve) => {
          animationPromiseResolver.current = resolve;
        });
      },
      hide: () => {
        setIsVisible(false);
        document.body.classList.remove("stop-scrolling");
      },
      isVisible,
    }),
    [isVisible]
  );

  return (
    <LoadingContext.Provider value={context}>
      {children}
      <Loader isVisible={isVisible} text={loadingText} />
    </LoadingContext.Provider>
  );
};
