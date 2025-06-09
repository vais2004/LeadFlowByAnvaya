import Header from "../components/Header";
import AddForm from "../components/AddForm";
import Sidebar from "../components/Sidebar";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

export default function LeadManagement() {
  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-wrap gap-3 p-3 align-items-start">
          <Sidebar />
          <div
            className="flex-grow-1 bg-white p-4 rounded shadow"
            style={{ flex: "4 600px" }}>
            <h1 className="mb-4 fs-1">Lead List</h1>
            <hr />

            <div className="mb-4">
              <p>
                <span className="mx-2"></span>
                <span className="mx-2"></span>
              </p>
            </div>
            
            {/* Filter */}
            <h2 className="fs-4 mb-3">Filter</h2>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label">Status</label>
                <select className="form-select">
                  <option value="">-- Select --</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Proposal Sent">Proposal Sent</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <div className="col-md-6">
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

            {/* Sort by */}
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label d-block">Sort By Priority:</label>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label" htmlFor="highPriority">
                    High
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label" htmlFor="mediumPriority">
                    Mediun
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label" htmlFor="lowPriority">
                    Low
                  </label>
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label d-block">
                  Sort by closing date:
                </label>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label">Oldest First</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" className="form-check-input" />
                  <label className="form-check-label">Newest First</label>
                </div>
              </div>
            </div>

            {/* Add Form */}
            <AddForm />
          </div>
        </div>
      </main>
    </>
  );
}
