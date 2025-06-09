import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AddAgent from "../components/AddAgent";
import { useState } from "react";

export default function SalesAgentManagement(){
  const { agents } = useSalesAgentContext();
  const [agentForm, setAgentForm] = useState(false);

  return (
    <>
      <Header />
      <main className="container-fluid">
        <div className="row">
          <Sidebar />

          <div className="col">
            <div className="py-4">
              <h2>Sales Agent Management</h2>
              <hr />
              <div className="table-responsive mb-3">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                    </tr>
                  </thead>

                  <tbody>
                    {agent && arguments.length > 0 ? (
                      agent.map((agent, index) => (
                        <tr key={index}>
                          <td>{agent.name}</td>
                          <td>{agent.email}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="2" className="text-center">
                          No agents found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* add agent form toggle */}
              {agentForm && (
                <div className="mb-3">
                  <AddAgent />
                </div>
              )}
              <div className="text-end">
                <button
                  className={`btn ${agentForm ? "btn-danger" : "btn-primary"}`}
                  onClick={() => setAgentForm(!agentForm)}>
                  {agentForm ? "Remove add Form" : "Add New Agent"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
