import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderWithSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="container-fluid" style={{ backgroundColor: "#9daabe" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#9daabe" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-semibold" to="/">
            <p>Anvaya</p>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-wrap gap-2">
              <li className="nav-item">
                <Link className="nav-link text-dark fs-5" to="/">
                  <i className="bi bi-clipboard2-data"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fs-5" to="/lead/management">
                  <i className="bi bi-handbag"></i> Leads
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark fs-5"
                  to="/agent/management">
                  <i className="bi bi-person"></i> Agents
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark fs-5" to="/reports">
                  <i className="bi bi-pie-chart"></i> Reports
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
