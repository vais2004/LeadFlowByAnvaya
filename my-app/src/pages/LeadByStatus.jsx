import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LeadByStatus() {
  return (
    <>
      <Header />
      <main className="container-fluid p-3">
        <div className="d-flex flex-wrap gap-3">
          <Sidebar />
          <div
            className="flex-grow-1 bg-white rounded shadow p-4"
            style={{ minWidth: "600px" }}>
            <h3>Lead By Status</h3>
            <div className="mb-3">
              <h5>Status:</h5>
              <ul className="list-group">
                <li className="list-group-item">Sales Agent:</li>
              </ul>
            </div>

            <div className="mb-2">
              <h4 className="fw-bold">Filter:</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Priority:</label>
                  <select className="form-select">
                    <option value="">-- Select --</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label"></label>
                  <select className="form-select">
                    <option value="">-- Select --</option>
                    {agents.map((agent) => (
                      <option key={agent.id} value={agent.id}>
                        {agent.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className="fw-bold mb-2">Sort by closing date:</label>
              <div className="form-check form-check-inline">
                <input className="form-check-input" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
