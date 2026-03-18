import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Apps from "./Pages/Apps/Apps.jsx";
import Error from "./Pages/Error/Error.jsx";
import AppError from "./Pages/AppError/AppError.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
      children: [
      {
        path: "/",
        element: <Home />,
        errorElement:AppError,
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
