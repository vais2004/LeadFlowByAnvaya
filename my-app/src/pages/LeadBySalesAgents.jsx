import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import useLeadContext from "../context/LeadContext";

export default function LeadBySalesAgent() {
  const { salesAgent, name } = useParams();

  const { leads, getLeads } = useLeadContext();

  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState({
    priority: "",
    status: "",
  });

  useEffect(() => {
    getLeads();
    //console.log("getLeads called");
  }, []);

  //console.log("leads:", leads);

  const handleSelectOption = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  let filteredLeads = leads.filter((lead) => {
    const agentId = lead.salesAgent?._id || lead.salesAgent?.id;
    return agentId === salesAgent;
  });

  if (filter.status) {
    filteredLeads = filteredLeads.filter(
      (lead) => lead.status === filter.status
    );
  }

  if (filter.priority) {
    filteredLeads = filteredLeads.filter(
      (lead) => lead.priority === filter.priority
    );
  }

  filteredLeads = filteredLeads.slice().sort((a, b) => {
    const dateA = new Date(a.timeToClose);
    const dateB = new Date(b.timeToClose);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  //debugging
  // console.log("All leads:", leads);
  // console.log("Filtered leads:", filteredLeads);
  // console.log("salesAgent param:", salesAgent);

  return (
    <>
      <Header />

      <main
        className="flex-grow-1 p-4 mt-5"
        style={{ backgroundColor: "lavender" }}>
        <h2 className="mb-4">Leads by Sales Agent</h2>
        <hr />
        {/* filter and sort section */}
        <div className="mb-4">
          <h5 className="fw-">Filter</h5>
          <div className="row gy-3">
            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={filter.status}
                onChange={handleSelectOption}>
                <option value="">-- Select --</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label">Priority</label>
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
            </div>

            <div className="col-md-4">
              <label className="form-label">Sort by Closing Date</label>
              <div>
                <label className="me-3">
                  <input
                    type="radio"
                    className="form-check-input me-1"
                    name="sortOrder"
                    value="asc"
                    checked={sortOrder === "asc"}
                    onChange={(e) => setSortOrder(e.target.value)}
                  />
                  Oldest First
                </label>
                <label>
                  <input
                    type="radio"
                    className="form-check-input me-1"
                    name="sortOrder"
                    value="desc"
                    checked={sortOrder === "desc"}
                    onChange={(e) => setSortOrder(e.target.value)}
                  />
                  Newest First
                </label>
              </div>
            </div>
          </div>
        </div>
        <h5 className="mb-3">Sales Agent: {decodeURIComponent(name)}</h5>

        <div className="mb-4">
          {filteredLeads.length > 0 ? (
            <ul className="list-group">
              {filteredLeads.map((lead, index) => (
                <li key={index} className="list-group-item">
                  {lead.name} - [Status: {lead.status}]
                </li>
              ))}
            </ul>
          ) : (
            <p>No leads found for this agent.</p>
          )}
        </div>
      </main>
    </>
  );
}
