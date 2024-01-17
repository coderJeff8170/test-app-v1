import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';




import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <div>there was an error</div>,
    children: [
      {
        path: "/home",
        element: <h1>Jeff</h1>,
      },
      {
        path: "/jenn",
        element: <h1>Jenn</h1>,
      },
      {
        path: "/sophia",
        element: <h1>Sophia</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
