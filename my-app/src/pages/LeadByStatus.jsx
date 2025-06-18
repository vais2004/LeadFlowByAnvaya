import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLeadContext from "../context/LeadContext";
import useSalesAgentContext from "../context/SalesAgentContext";

export default function LeadByStatus() {
  const { status } = useParams();
  const { leads, getLeads } = useLeadContext();
  const { agents } = useSalesAgentContext();

  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState({
    priority: "",
    salesAgent: "",
    status: status,
  });

  useEffect(() => {
    getLeads(filter);
  }, [filter]);

  const handleSelectOption = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredLeads = leads.slice().sort((a, b) => {
    const dateA = new Date(a.timeToClose);
    const dateB = new Date(b.timeToClose);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <>
      <Header />
      <main className="container-fluid p-3">
        <div className="d-flex flex-wrap gap-3">
          {/* <Sidebar /> */}
          <div
            className="flex-grow-1 bg-white rounded shadow p-4"
            style={{ minWidth: "600px" }}>
            <h3>Lead By Status</h3>
            <div className="mb-3">
              <h5>Status:</h5>
              <div>
                {filteredLeads.length >= 1 ? (
                  <ul>
                    {" "}
                    {filteredLeads.map((lead, index) => (
                      <li key={index}>
                        {lead.name} - [Sales Agent: {lead.salesAgent.name}]
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Not found...!</p>
                )}
              </div>
            </div>

            <div className="mb-2">
              <h4 className="fw-bold">Filter:</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Priority:</label>
                  <select
                    className="form-select"
                    onChange={handleSelectOption}
                    value={filter.priority}
                    name="priority">
                    <option value="">-- Select --</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label"></label>
                  <select
                    className="form-select"
                    onChange={handleSelectOption}
                    value={filter.salesAgent}
                    name="salesAgent">
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
            <div className="col-md-6">
               <label className="form-label d-block">Sort by Closing Date:</label>
                  <br />
                  <label className="form-label" htmlFor="sortAsc">
                    <input
                      className="form-input"
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
                      className="form-input"
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
      </main>
    </>
  );
}
