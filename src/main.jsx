import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {RouterProvider} from "react-router-dom";
import router from "@/routes/route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
