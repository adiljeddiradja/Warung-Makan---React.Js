import {createBrowserRouter} from "react-router-dom";

import Home from "@pages/Home/Home";
import Login from "@pages/Authentication/Login";

import DashboardLayout from "@/layout/DashboardLayout";
import Dashboard from "@pages/Dashboard/Dashboard";
import Customer from "@pages/Customer/Customer";
import CustomerList from "@pages/Customer/components/CustomerList";
import CustomerForm from "@pages/Customer/components/CustomerForm";
import ProtectedRoute from "./ProtectedRoute";
import AdminList from "@pages/Admin/components/AdminList";
import Admin from "@pages/Admin/Admin";
import AdminForm from "@pages/Admin/components/AdminForm";
import Menu from "@pages/Product/Menu.jsx";
import ProductForm from "@pages/Product/components/ProductForm";
import ProductList from "@pages/Product/components/ProductList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
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
            element: <ProductList />,
          },
          {
            path: "new",
            element: <ProductForm />,
          },
          {
            path: "update/:id",
            element: <ProductForm />,
          },
        ],
      },


    ],
  },
]);

export default router;
