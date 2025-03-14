import React from 'react'

const Navbar = () => {
  return (
    <div
    style={{
      minHeight: "12vh",
      position: "sticky",
        top: 0,
      overflow: "hidden",
      background: "linear-gradient(135deg, #10B981 0%, #0069b4 100%)",
    }}
  >
    <nav
        className="navbar navbar-expand-lg"
        style={{ padding: "15px 0", position: "relative", zIndex: 2 }}
      >
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#"
            style={{ color: "white" }}
          >
            <div style={{ marginRight: "10px" }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 21H21V8L12 2L3 8V21Z" fill="white" />
                <path d="M12 16L17 12H14V7H10V12H7L12 16Z" fill="#10B981" />
              </svg>
            </div>
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              Actuary List
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            style={{ border: "1px solid white" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ filter: "invert(1)" }}
            ></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontWeight: "500" }}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  style={{ color: "white", fontWeight: "500" }}
                >
                  Post A Job
                </a>
              </li>
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0 ">
                <a
                  className="btn btn-light d-flex align-items-center text-bg-success text-dark"
                  href="#"
                  style={{
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "none",

                    fontWeight: "500",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  Get Free Job Alerts
                </a>
              </li>
            </ul>
          </div>
        </div>
          </nav>
            </div>
      );
}

export default Navbar