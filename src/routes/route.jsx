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
import Menus from "@pages/Product/Menus.jsx";
import MenusForm from "@pages/Product/components/MenusForm.jsx";
import MenusList from "@pages/Product/components/MenusList.jsx";
import Transaction from "../pages/Transaction/Transaction";
import TransactionList from "../pages/Transaction/components/TransactionList";

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
    errorElement: <>Error Cuy!</>,
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
        path: "customer",
        element: <Customer />,
        children: [
          {
            index: true,
            element: <CustomerList />,
          },
          {
            path: "new",
            element: <CustomerForm />,
          },
        ],
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            index: true,
            element: <AdminList />,
          },
          {
            path: "new",
            element: <AdminForm />,
          },
        ],
      },
      {
        path: "product",
        element: <Menus />,
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
      {
        path: "transaction",
        element: <Transaction />,
        children: [
          {
            index: true,
            element: <TransactionList />,
          },
        ],
      },

    ],
  },
]);

export default router;
