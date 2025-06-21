import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "./components/Header";
import AddLead from "./components/AddLead";
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import useLeadContext from "./context/LeadContext";
import AddForm from "./components/AddForm";

function App() {
  const { leads } = useLeadContext();
  const [filteredLeadsValue, setFilteredLeadsValue] = useState("New");
  const filteredLeads = leads.filter(
    (lead) => lead.status === filteredLeadsValue
  );

  return (
    <>
      <Header />
      <div className="col-md-3 bg-light ">
        <Sidebar />
      </div>

      <main style={{fontFamily:'cursive'}} className="container-fluid px-5">
        <div className="row px-5">
          <div className="col-md-9 py-5 px-4">
            <h2 className="mb-3">Dashboard</h2>
            <hr />

            <div className="mb-4">
              <h5 className="fw-semibold mb-3">Leads</h5>
              <div>
                {filteredLeads && filteredLeads.length >= 1 ? (
                  filteredLeads.map((lead, index) => (
                    <div className="border rounded p-2 bg-light" key={index}>
                      [
                      <Link
                        to={`/lead/details/${lead._id}`}
                        className="text-decoration-none">
                        {lead.name}
                      </Link>
                      ]
                    </div>
                  ))
                ) : (
                  <div className="text-muted">No lead found...!</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <h5>Lead Status</h5>
              <div className="d-flex justify-content-between border p-3 rounded bg-white ">
                <div className="fw-medium">{filteredLeadsValue}</div>
                <div>{filteredLeads.length}</div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Quick Filter:</label>
              <select
                className="form-control"
                onChange={(e) => setFilteredLeadsValue(e.target.value)}>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

            <div className="mb-4">
              <AddForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
