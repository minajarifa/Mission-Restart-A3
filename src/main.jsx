import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Apps from "./Pages/Apps/Apps.jsx";
import Error from "./Pages/Error/Error.jsx";
import AppError from "./Pages/AppError/AppError.jsx";
import TrendyDetails from "./Pages/TrendyDetaills/TrendyDetails.jsx";
import Installation from "./Pages/Installation/Installation.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: AppError,
      },
      {
        path: "/Apps",
        Component: Apps,
      },
      {
        path: "/Installation",
        Component: Installation,
        loader: async () => {
          const res = await fetch("/apps.json");
          return res;
        },
      },
      {
        path: "/TrendyDetails/:id",
        Component: TrendyDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
