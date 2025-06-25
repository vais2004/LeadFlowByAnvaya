import Header from "../components/Header";
import AddForm from "../components/AddForm";
import Sidebar from "../components/Sidebar";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import useSalesAgentContext from "../context/SalesAgentContext";
import useLeadContext from "../context/LeadContext";
import AddLead from "../components/AddLead";

export default function LeadManagement() {
  const { agents } = useSalesAgentContext();
  const { leads, getLeads, loading } = useLeadContext();

  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState({
    status: "",
    salesAgent: "",
    priority: "",
    source: "",
  });

  const handleSelectOption = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilter({ status: "", salesAgent: "", priority: "", source: "" });
  };

  useEffect(() => {
    getLeads(filter);
  }, [filter]);

  const sortedLeads = leads.slice().sort((a, b) => {
    return sortOrder === "asc"
      ? a.timeToClose - b.timeToClose
      : b.timeToClose - a.timeToClose;
  });

  return (
    <>
      <Header />

      <main className="container-fluid p-4">
        <div className="bg-white rounded p-4 shadow">
          <div
            style={{ backgroundColor: "lavender" }}
            className="p-3 d-flex justify-content-between align-items-center mb-4">
            <h2>
              Lead Management{" "}
              <small className="text-muted fs-6">
                (Showing {leads.length} leads)
              </small>
            </h2>
          </div>

          {/* filters */}
          <div className="row mb-4 ">
            <h4>Filters</h4>
            <div className="col-md-2">
              <label>Status</label>
              <select
                className="form-select"
                name="status"
                value={filter.status}
                onChange={handleSelectOption}>
                <option value="">All</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="col-md-2">
              <label>Sales Agent</label>
              <select
                className="form-select"
                name="salesAgent"
                value={filter.salesAgent}
                onChange={handleSelectOption}>
                <option value="">All</option>
                {agents.map((agent) => (
                  <option key={agent._id} value={agent._id}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-2">
              <label>Priority</label>
              <select
                className="form-select"
                name="priority"
                value={filter.priority}
                onChange={handleSelectOption}>
                <option value="">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="col-md-2">
              <label>Source</label>
              <select
                className="form-select"
                name="source"
                value={filter.source}
                onChange={handleSelectOption}>
                <option value="">All</option>
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Cold Call">Cold Call</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-md-3 d-flex align-items-end">
              <button
                className="btn btn-outline-secondary w-100"
                onClick={clearFilters}>
                Clear Filters
              </button>
            </div>
          </div>

          {/* sort controls */}
          <div className="mb-4">
            <label className="form-label me-3">Sort by Time to Close:</label>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="asc"
                value="asc"
                checked={sortOrder === "asc"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              <label className="form-check-label" htmlFor="asc">
                Oldest First
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                type="radio"
                className="form-check-input"
                id="desc"
                value="desc"
                checked={sortOrder === "desc"}
                onChange={(e) => setSortOrder(e.target.value)}
              />
              <label className="form-check-label" htmlFor="desc">
                Newest First
              </label>
            </div>
          </div>
          <hr />
          <div>
            <AddForm />
          </div>

          {/* lead table */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Source</th>
                    <th>Sales Agent</th>
                    <th>Status</th>
                    <th>Time to Close</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedLeads.map((lead) => (
                    <tr key={lead._id}>
                      <td>{lead.name}</td>
                      <td>{lead.source}</td>
                      <td>{lead.salesAgent.name}</td>
                      <td>{lead.status}</td>
                      <td>{lead.timeToClose} days</td>
                      <td>{lead.priority}</td>
                      <td>
                        <Link
                          to={`/lead/details/${lead._id}`}
                          className="btn btn-outline-primary btn-sm">
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {sortedLeads.length === 0 && <p>No leads found.</p>}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
