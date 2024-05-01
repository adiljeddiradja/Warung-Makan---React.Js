import {
  IconAccessible,
  IconApps,
  IconAsset,
  IconChevronDown,
  IconDoorExit,
  IconHome2,
  IconReceipt,
  IconUsers,
} from "@tabler/icons-react";
import PropTypes from "prop-types";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

export default function Sidebar({ isVisible, setVisible }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => {
      setVisible(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setVisible]);

  return (
    <div
      className={`bg-success text-white p-4 shadow ${
        isVisible ? "show-custom" : "hide-custom"
      }`}
    >
      <div className="font-logo text-center mb-5">
        <Link to="/" className="text-white text-decoration-none" href="/">
          <h2 className="fs-2">
            <i>
              <b>Warung Makan</b> Bahari
            </i>
          </h2>
        </Link>
        <h2 className="fs-6 my-4 font-primary fw-bold">Sedapnyee..</h2>
      </div>
      <nav>
        <ul className="d-flex flex-column gap-3 nav-list list-unstyled">
          <p className="fw-bold">Dashboard</p>
          <li
            className="cursor-pointer text-white"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="true"
          >
            <i className="me-3">
              <IconApps />
            </i>
            <span>Master</span>
            <i className="ms-3">
              <IconChevronDown />
            </i>
          </li>
          <div className="collapse show" id="dashboard-collapse">
            <ul className="text-white cursor-pointer d-flex flex-column gap-3 btn-toggle-nav list-unstyled mx-4">
              <li className="cursor-pointer">
                <Link
                    className="text-white text-decoration-none"
                    to="/dashboard"
                >
                  <i className="me-3">
                    <IconHome2/>
                  </i>
                  <span>Home</span>
                </Link>
              </li>

              <li className="cursor-pointer">
                <Link
                    to="/dashboard/product"
                    className="text-white text-decoration-none"
                >
                  <i className="me-3">
                    <IconAsset/>
                  </i>
                  <span>Menus</span>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                    to="/dashboard/customer"
                    className="text-white text-decoration-none"
                >
                  <i className="me-3">
                    <IconUsers/>
                  </i>
                  <span>Customer</span>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                    className="text-white text-decoration-none"
                    to="/dashboard/admin"
                >
                  <i className="me-3">
                    <IconAccessible/>
                  </i>
                  <span>Admin</span>
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                    className="text-white text-decoration-none"
                    to="#"
                >
                  <i className="me-3">
                    <IconAccessible/>
                  </i>
                  <span>Table</span>
                </Link>
              </li>
            </ul>
          </div>

          <li className="cursor-pointer text-white">
            <Link
                className="text-white text-decoration-none"
                to="/dashboard/transaction"
            >
              <i className="me-3">
                <IconReceipt/>
              </i>
              <span>Transaction</span>
            </Link>
          </li>
          <hr />
          <li
            data-bs-toggle="modal"
            data-bs-target="#logoutModal"
            className="cursor-pointer text-white"
          >
            <i className="me-3">
              <IconDoorExit />
            </i>
            <span>Logout</span>
          </li>
        </ul>
      </nav>

      <div className="modal fade" tabIndex={-1} id="logoutModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark">Logout</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="text-dark">Apakah yakin ingin logout?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Batal
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isVisible: PropTypes.bool,
  setVisible: PropTypes.func,
};
