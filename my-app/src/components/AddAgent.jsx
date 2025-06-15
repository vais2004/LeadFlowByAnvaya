import { useState } from "react";
import useSalesAgentContext from "../context/SalesAgentContext";

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
    agent.name = "";
    agent.email = "";
  };

  return (
    <>
      <form className="my-3" onSubmit={handleAgentSubmitBtn}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              required
              value={agent.name}
              name="name"
            />
          </div>
          <br />
          <div className="col-md-6">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              required
              value={agent.email}
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>
    </>
  );
}
