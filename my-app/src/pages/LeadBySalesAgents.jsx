import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function LeadBySalesAgent() {
  return (
    <>
      <Header />
      <main className="container-fluid py-3">
        <div className="d-flex flex-wrap gap-3"></div>
        <Sidebar />
        <div className="p-4 bg-white rounded shadow">
          <h5 className="text-center text-dark fw-bold my-4">
            Lead By Sales Agent
          </h5>
          <div>
            <h3>Status: </h3>
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="fw-bold">Filter</h4>
              <div className="row gy-3">
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
                  <br />
                  <label>Priority:</label>
                  <select className="form-select">
                    <option value="">-- Select --</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <br />
                  <label className="form-label">Sort by Closing Date:</label>

                  <input className="form-check-input" />
                  <label className="form-check-label" htmlFor="sortAsc">
                    Oldest First
                  </label>

                  <input className="form-check-input" />
                  <label className="form-check-label" htmlFor="sortAsc">
                    Newest First
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
