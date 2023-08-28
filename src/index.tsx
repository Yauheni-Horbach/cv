import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebFont from "webfontloader";

import { Feedback } from "./pages/Feedback";
import { Main } from "./pages/Main";
import { Portfolio } from "./pages/Portfolio";
import { Skills } from "./pages/Skills";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

const Root = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Jost:100,300,600,700,900"],
      },
    });
  }, []);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(<Root />);
