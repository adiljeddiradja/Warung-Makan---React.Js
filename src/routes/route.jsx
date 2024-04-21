import {createBrowserRouter} from "react-router-dom";
import Login from "@pages/Authentication/Login";

import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@pages/Dashboard/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Menu from "@pages/Menus/Menu.jsx";
import MenusForm from "@pages/Menus/components/MenusForm.jsx";
import MenusList from "@pages/Menus/components/MenusList.jsx";

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },



      {
        path: "product",
        element: <Menu />,
        children: [
          {
            index: true,
            element: <MenusList />,
          },
          {
            path: "new",
            element: <MenusForm />,
          },
          {
            path: "update/:id",
            element: <MenusForm />,
          },
        ],
      },


    ],
  },
]);

export default router;
