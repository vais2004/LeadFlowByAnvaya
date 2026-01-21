import { useState } from "react";
import useSalesAgentContext from "../context/SalesAgentContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddAgent() {
  const { addAgent } = useSalesAgentContext();
  const [agent, setAgent] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgent((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgentSubmitBtn = async (e) => {
    e.preventDefault();
    addAgent(agent);
    toast.success(`Added "${agent.name}" as a new agent!`);

    setAgent({ name: "", email: "" });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <>
      <form className="my-3" onSubmit={handleAgentSubmitBtn}>
        <div className="row g-3">
          <div>
            <h4>Add New Agent</h4>
            <hr />
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Agent Name"
              onChange={handleChange}
              required
              value={agent.name}
              name="name"
            />
          </div>

          <div>
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={handleChange}
              required
              value={agent.email}
              name="email"
            />
          </div>
          <div className="col-md-4">
            <button type="submit" className="col-md-4 btn btn-outline-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
