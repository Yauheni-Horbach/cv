import React from "react";
import debounce from "lodash.debounce";

import { Section } from "../../../../components/Section";

import "./styles.css";

export const DescriptionSection = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [hideWindow, setHideWindow] = React.useState(false);

  const debouncedChangeOpacityWindow = React.useCallback(
    debounce((value) => {
      setHideWindow(value);
    }, 1000),
    []
  );

  const findMousePositionRelativeToElement = (e: {
    currentTarget: {
      getBoundingClientRect: () => { left: number; top: number };
    };
    clientX: number;
    clientY: number;
  }) => {
    setHideWindow(false);

    const rect = e.currentTarget.getBoundingClientRect();
    const xClick2 = e.clientX - rect.left;
    const yClick2 = e.clientY - rect.top;

    setMousePosition({ x: xClick2, y: yClick2 });

    debouncedChangeOpacityWindow(true);
  };

  return (
    <Section onMouseMove={findMousePositionRelativeToElement} id="description">
      <div className="layer layer_bottom">
        {mousePosition.x} {mousePosition.y}
        <div
          className="window"
          style={{ top: mousePosition.y, left: mousePosition.x }}
        ></div>
      </div>
      <div
        className="layer layer_top"
        style={{
          transition: "opacity 0.5s ease-in-out",
          opacity: +!hideWindow,
          clipPath: `circle(200px at ${mousePosition.x}px ${mousePosition.y}px)`,
        }}
      >
        Hello
      </div>
    </Section>
  );
};
