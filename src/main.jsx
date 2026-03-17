import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Apps from "./Pages/Apps/Apps.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
      children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Apps",
        Component: Apps,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
