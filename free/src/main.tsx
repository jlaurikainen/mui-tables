import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { App } from "./App.tsx";
import { App2 } from "./App2.tsx";
import { App3 } from "./App3.tsx";

const router = createHashRouter([
  { path: "/", Component: App },
  { path: "/pro", Component: App2 },
  { path: "/pre", Component: App3 },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
