import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

export default Admin;
