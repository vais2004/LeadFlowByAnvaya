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
  const [filteredLeadsValue, setFilteredLeadsValue] = useState("All");
  const filteredLeads =
    filteredLeadsValue === "All"
      ? leads
      : leads.filter((lead) => lead.status === filteredLeadsValue);

  return (
    <>
      <Header />
      <div className="col-md-3 bg-light ">
        <Sidebar />
      </div>

      <main  className="container-fluid px-5" >
        <div className="row px-5">
          <div className="col-md-9 py-5 px-4">
            <h2 className="mb-3">Dashboard</h2>
            <hr />

            <div className="mb-4">
              <label className="form-label">Quick Filter:</label>
              <select
                className="form-control"
                onChange={(e) => setFilteredLeadsValue(e.target.value)}
                value={filteredLeadsValue}>
                <option value="All">All Leads</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Qualified">Qualified</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Closed">Closed</option>
              </select>
            </div>
             <div className="mb-4">
              <label>Lead Status:</label>
              <div className="d-flex justify-content-between border p-1 rounded bg-light ">
                <div className="fw-medium">{filteredLeadsValue}</div>
                <div>{filteredLeads.length}</div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-semibold mb-3">Leads</h4>
              <div>
                {filteredLeads && filteredLeads.length >= 1 ? (
                  filteredLeads.map((lead, index) => (
                    <div className="border  p-2 bg-light" key={index}>
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
              <AddForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css";

// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import AddForm from "./components/AddForm";
// import useLeadContext from "./context/LeadContext";
// import { Link } from "react-router-dom";

// function App() {
//   const { leads } = useLeadContext();
//   const [filteredLeadsValue, setFilteredLeadsValue] = useState("All");

//   // Filtered leads
//   const filteredLeads =
//     filteredLeadsValue === "All"
//       ? leads
//       : leads.filter((lead) => lead.status === filteredLeadsValue);

//   // Count status-wise leads for summary cards
//   const countByStatus = (status) =>
//     leads.filter((lead) => lead.status === status).length;

//   return (
//     <>
//       <Header />
//       <div className="d-flex">
//         <div className="col-md-2 bg-light min-vh-100">
//           <Sidebar />
//         </div>

//         <main className="col-md-10 p-4">
//           {/* Dashboard header and filter */}
//           <div className="d-flex justify-content-between align-items-center mb-4">
//             <h2 className="mb-0">Dashboard</h2>
//             <select
//               className="form-select w-auto"
//               onChange={(e) => setFilteredLeadsValue(e.target.value)}
//               value={filteredLeadsValue}
//             >
//               <option value="All">All</option>
//               <option value="New">New</option>
//               <option value="Contacted">Contacted</option>
//               <option value="Qualified">Qualified</option>
//               <option value="Proposal Sent">Proposal Sent</option>
//               <option value="Closed">Closed</option>
//             </select>
//           </div>

//           {/* Summary cards */}
//           <div className="row mb-4">
//             <div className="col-md-4">
//               <div className="card text-center shadow-sm">
//                 <div className="card-body">
//                   <h6 className="text-muted">New Leads</h6>
//                   <h4>{countByStatus("New")}</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card text-center shadow-sm">
//                 <div className="card-body">
//                   <h6 className="text-muted">Contacted</h6>
//                   <h4>{countByStatus("Contacted")}</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card text-center shadow-sm">
//                 <div className="card-body">
//                   <h6 className="text-muted">Qualified</h6>
//                   <h4>{countByStatus("Qualified")}</h4>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Recent Leads */}
//           <div className="mb-4">
//             <h4 className="fw-semibold mb-3">Recent Leads</h4>
//             <div className="row">
//               {filteredLeads && filteredLeads.length >= 1 ? (
//                 filteredLeads.map((lead, index) => (
//                   <div className="col-md-4 mb-3" key={index}>
//                     <div className="card shadow-sm h-100">
//                       <div className="card-body">
//                         <h5 className="card-title">
//                           <Link
//                             to={`/lead/details/${lead._id}`}
//                             className="text-decoration-none"
//                           >
//                             {lead.name}
//                           </Link>
//                         </h5>
//                         <p className="mb-1">
//                           <strong>Source:</strong> {lead.source}
//                         </p>
//                         <p className="mb-1">
//                           <strong>Sales Agent:</strong>{" "}
//                           {lead.salesAgent?.name || "N/A"}
//                         </p>
//                         <p className="mb-1">
//                           <strong>Status:</strong>{" "}
//                           <span className="badge bg-primary">{lead.status}</span>
//                         </p>
//                         <p className="mb-1">
//                           <strong>Priority:</strong>{" "}
//                           <span className="badge bg-warning text-dark">
//                             {lead.priority || "N/A"}
//                           </span>
//                         </p>
//                         <p className="mb-0">
//                           <strong>Time to close:</strong>{" "}
//                           {lead.timeToClose || "N/A"} Days
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="text-muted ps-3">No lead found...!</div>
//               )}
//             </div>
//           </div>

//           {/* Add Lead Form */}
//           <div className="mb-4">
//             <AddForm />
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }

// export default App;

