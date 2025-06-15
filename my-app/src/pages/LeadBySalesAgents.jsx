import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import useLeadContext from "../context/LeadContext";
import useSalesAgentContext from "../context/SalesAgentContext";

export default function LeadBySalesAgent() {
  const { salesAgent } = useParams();
  const { name } = useParams();

  const { leads, getLeads } = useLeadContext();
  const { agents } = useSalesAgentContext();

  const [sortOrder, setOrder] = useState("asc");
  const [filter, setFilter] = useState({
    priority: "",
    salesAgent: salesAgent,
    status: "",
  });

  useEffect(() => {
    getLeads(filter);
  }, [filter]);

  const handleSelectOption = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredLeads = leads.slice().sort((a, b) => {
    const dataA = new Date(a.timeToClose);
    const dateB = new Date(b.timeToClose);

    return sortOrder === "asc" ? dataA - dateB : dateB - dataA;
  });

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
              {filteredLeads.length >= 1 ? (
                <ul>
                  {" "}
                  {filteredLeads.map((lead, index) => (
                    <li key={index}>
                      {lead.name} - [Sales Agent: {lead.status}]
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Not found...!</p>
              )}
            </div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="fw-bold">Filter</h4>
              <div className="row gy-3">
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select
                    value={filter.status}
                    name="status"
                    onChange={handleSelectOption}
                    className="form-select">
                    <option value="">-- Select --</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <br />
                  <label>Priority:</label>
                  <select
                    className="form-select"
                    name="priority"
                    value={filter.priority}
                    onChange={handleSelectOption}>
                    <option value="">-- Select --</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                  <br />
                  <label className="form-label">Sort by Closing Date:</label>
                  <br />
                  <label className="form-label" htmlFor="sortAsc">
                    <input
                      className="form-check-input"
                      value="asc"
                      type="radio"
                      checked={sortOrder === "asc"}
                      onChange={(e) => setSortOrder(e.target.value)}
                    />
                    Oldest First
                  </label>
                  <br />
                  <label className="form-label" htmlFor="sortAsc">
                    <input
                      className="form-check-input"
                      value="desc"
                      type="radio"
                      checked={sortOrder === "desc"}
                      onChange={(e) => setSortOrder(e.target.value)}
                    />
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
