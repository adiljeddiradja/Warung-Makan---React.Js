import { Outlet } from "react-router-dom";

function Menus() {
  return (
    <div className="p-4">
      <Outlet />
    </div>
  );
}

export default Menus;
