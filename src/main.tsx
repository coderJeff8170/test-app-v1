import React from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { HomePage } from "../src/routes/HomePage";



import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";
import { GridPage } from "./routes/GridPage";
import { FormPage } from "./routes/FormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>there was an error</div>,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/grid",
        element: <GridPage />,
      },
      {
        path: "/form",
        element: <FormPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
