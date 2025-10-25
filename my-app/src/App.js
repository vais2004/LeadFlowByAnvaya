import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";

import AddForm from "./components/AddForm";
import useLeadContext from "./context/LeadContext";
import { Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { leads, deleteLead } = useLeadContext();
  const [filteredLeadsValue, setFilteredLeadsValue] = useState("All");

  const filteredLeads =
    filteredLeadsValue === "All"
      ? leads
      : leads.filter((lead) => lead.status === filteredLeadsValue);

  const countByStatus = (status) =>
    leads.filter((lead) => lead.status === status).length;

  async function handleDelete(leadId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lead?"
    );
    if (confirmDelete) {
      await deleteLead(leadId);
      toast.success("Lead deleted successfully!");
    }
  }

  return (
    <>
      <Header />
       <ToastContainer position="top-right" autoClose={3000} />
      <main className="container mt-4 px-4">
        {/* dashboard header and filter */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className=" mb-0">Dashboard</h2>

          <select
            className="form-select w-auto"
            onChange={(e) => setFilteredLeadsValue(e.target.value)}
            value={filteredLeadsValue}>
            <option value="All">All</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Proposal Sent">Proposal Sent</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        {/* summary cards */}
        <div className="row mb-4 g-3">
          {["New", "Contacted", "Qualified", "Closed"].map((status, idx) => (
            <div className="col-md-3" key={idx}>
              <div className="card text-center shadow-sm border-0">
                <div className="card-body">
                  <h6 className="text-muted">{status} Leads</h6>
                  <h4 className="fw-bold">{countByStatus(status)}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* add lead form */}
        <div className="my-3">
          <AddForm />
        </div>

        {/* recent leads */}
        <div className="mb-4">
          <h4 className="fw-semibold mb-3">Recent Leads</h4>
          <div className="row g-3">
            {filteredLeads && filteredLeads.length > 0 ? (
              filteredLeads.map((lead, index) => (
                <div className="col-md-4" key={index}>
                  <div
                    className="card shadow-sm h-100 border-0"
                    style={{ backgroundColor: "lavender" }}>
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{lead.name}</h5>
                      <hr />
                      <p className="mb-1">
                        <strong>Source:</strong> {lead.source}
                      </p>
                      <p className="mb-1">
                        <strong>Sales Agent:</strong>{" "}
                        {lead.salesAgent?.name || "N/A"}
                      </p>
                      <p className="mb-1">
                        <strong>Status:</strong>{" "}
                        <span
                          className="badge text-light col-3"
                          style={{ backgroundColor: "#b074c9" }}>
                          {lead.status}
                        </span>
                      </p>
                      <p className="mb-1">
                        <strong>Priority:</strong>{" "}
                        <span
                          className="badge text-light col-3"
                          style={{ backgroundColor: "#e6437b" }}>
                          {lead.priority || "N/A"}
                        </span>
                      </p>
                      <p className="mb-3">
                        <strong>Time to close:</strong>{" "}
                        {lead.timeToClose || "N/A"} Days
                      </p>

                      <div className="d-flex  justify-content-between">
                        <Link
                          to={`/lead/details/${lead._id}`}
                          className="col-5 btn btn-outline-primary btn-sm">
                          View / Edit
                        </Link>
                        <button
                          className="col-5 btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(lead._id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="ps-3 text-muted">No lead found...!</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
