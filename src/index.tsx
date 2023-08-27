import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Main } from "./pages/Main";
import { Portfolio } from "./pages/Portfolio";
import { Feedback } from "./pages/Feedback";
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

const rootElement = document.getElementById("root")!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
