import { IconX } from "@tabler/icons-react";
import { IconDeviceFloppy } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

function AdminForm() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard/admin");
  };
  return (
    <div className="p-4 shadow-sm rounded-2">
      <h2>Form Admin</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label required">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Konfirmasi Password
          </label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nama
          </label>
          <input type="text" className="form-control" name="name" id="name" />
        </div>
        <div className="row row-cols-2">
          <div className="mb-3">
            <label htmlFor="position" className="form-label">
              Jabatan
            </label>
            <input
              type="text"
              className="form-control"
              name="position"
              id="position"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label required">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Alamat
          </label>
          <textarea
            className="form-control"
            name="address"
            id="address"
            rows={5}
          ></textarea>
        </div>
        <div className="d-flex gap-2">
          <button
            type="submit"
            className="d-flex align-items-center btn btn-primary"
          >
            <i className="me-2">
              <IconDeviceFloppy />
            </i>
            Submit
          </button>
          <button
            onClick={handleBack}
            type="button"
            className="d-flex align-items-center btn btn-danger text-white"
          >
            <i className="me-2">
              <IconX />
            </i>
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminForm;
