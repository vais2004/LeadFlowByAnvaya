// import Header from "../components/Header";
// import Sidebar from "../components/Sidebar";
// import AddAgent from "../components/AddAgent";
// import useSalesAgentContext from "../context/SalesAgentContext";
// import { useState } from "react";

// export default function SalesAgentManagement() {
//   const { agents } = useSalesAgentContext();
//   const [agentForm, setAgentForm] = useState(false);

//   return (
//     <>
//       <Header />
//       <div className="d-flex flex-wrap">
//         <Sidebar />
//       </div>
//       <main className="container-fluid">
//         <div className="col">
//           <div className="py-4">
//             <h2>Sales Agent Management</h2>
//             <hr />
//             <div className="table-responsive mb-3">
//               <table className="table table-bordered table-striped">
//                 <thead className="table-dark">
//                   <tr>
//                     <th>NAME</th>
//                     <th>EMAIL</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {agents && agents.length > 0 ? (
//                     agents.map((agent, index) => (
//                       <tr key={index}>
//                         <td>{agent.name}</td>
//                         <td>{agent.email}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="2" className="text-center">
//                         No agents found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>

//             {/* add agents form toggle */}
//             {agentForm && (
//               <div className="mb-3">
//                 <AddAgent />
//               </div>
//             )}
//             <div className="text-end">
//               <button
//                 className={`btn ${
//                   agentForm ? "btn-outline-danger" : "btn-outline-primary"
//                 }`}
//                 onClick={() => setAgentForm(!agentForm)}>
//                 {agentForm ? "Remove add Form" : "Add New Agent"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddAgent from "../components/AddAgent";
import useSalesAgentContext from "../context/SalesAgentContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SalesAgentManagement() {
  const { agents } = useSalesAgentContext();
  const [agentForm, setAgentForm] = useState(false);

  return (
    <>
      <Header />
      <div className="d-flex flex-wrap">
        <Sidebar />
      </div>
      <main className="container-fluid">
        <div className="col">
          <div className="py-4">
            <h2>Sales Agent Management</h2>
            <hr />
            <div className="table-responsive mb-3">
              <table className="table table-bordered table-striped align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {agents && agents.length > 0 ? (
                    agents.map((agent, index) => (
                      <tr key={index}>
                        <td>{agent.name}</td>
                        <td>{agent.email}</td>
                        <td>
                          <Link
                            to={`/lead/sales-agent/${agent._id}/${agent.name}`}>
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">
                        No agents found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* add agents form toggle */}
            {agentForm && (
              <div className="mb-3 p-3" style={{ backgroundColor: "lavender" }}>
                <AddAgent />
              </div>
            )}
            <div className="text-end">
              <button
                className={`btn ${
                  agentForm ? "btn-outline-danger" : "btn-outline-primary"
                }`}
                onClick={() => setAgentForm(!agentForm)}>
                {agentForm ? "Remove add Form" : "Add New Agent"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
