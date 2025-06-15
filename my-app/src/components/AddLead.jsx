import axios from "axios";
import useLeadContext from "../context/LeadContext";
import { useEffect, useState } from "react";

export default function AddLead() {
  const { addLead, updateLead } = useLeadContext();
  const [agents, setAgents] = useState([]);
  const [lead, setLead] = useState({
    name: "",
    source: "",
    salesAgent: "",
    status: "",
    tags: [],
    timeToClose: 0,
    priority: "",
  });

  useEffect(() => {
    if (data) {
      setLead({
        name: data.name || "",
        source: data.source || "",
        salesAgent: data.salesAgent?.id || "",
        status: data.status || "",
        tags: data.tags || [],
        timeToClose: data.timeToClose || 0,
        priority: data.priority || "",
      });
    }
  }, [data]);

  useEffect(() => {
    const fetachAgents = async () => {
      const response = await axios.get(
        "https://lead-flow-by-anvaya-backend.vercel.app/agents"
      );
      setAgents(response.data);
    };
    fetachAgents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagChange = (e) => {
    const { value, checked } = e.target;

    setLead((prev) => {
      if (checked) {
        return { ...prev, tags: [...prev.tags, value] };
      } else {
        return { ...prev, tags: prev.tags.filter((tag) => tag !== value) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data) {
      updateLead(lead, data.id);
    } else {
      addLead(lead);
      setLead({
        name: "",
        source: "",
        salesAgent: "",
        status: "",
        tags: [],
        timeToClose: 0,
        priority: "",
      });
    }
  };

  return (
    <main className="container py-3">
      <h3>Add New Lead</h3>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div>
            <label className="form-label">Lead Name:</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={lead.name}
              required
              onChange={handleChange}
            />
            <br />

            <label className="form-label">Lead Source:</label>
            <select
              value={lead.source}
              onChange={handleChange}
              className="form-select"
              name="LeadSource">
              <option value="">Select Source</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Other">Other</option>
            </select>
            <br />

            <label className="form-label">Assigned Sales Agent:</label>
            <select
              value={lead.salesAgent}
              className="form-control"
              type="text"
              required
              name="agents"
              onChange={handleChange}>
              <option value={""}>---Select---</option>
              {agents.map((agent) => (
                <option value={agent.id}>{agent.name}</option>
              ))}
            </select>
            <br />

            <label className="form-label">Lead Status:</label>
            <select
              required
              value={lead.status}
              onChange={handleChange}
              className="form-select"
              name="leadStatus">
              <option value="">Select Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>
            <br />

            <label className="form-label">Tags:</label>
            <br />
            <label htmlFor="highValue">
              <input
                type="checkbox"
                value="High Value"
                id="highValue"
                checked={lead.tags.includes("High Value")}
                onChange={handleTagChange}
              />{" "}
              High Value
            </label>
            <br />
            <label htmlFor="followUp">
              <input
                type="checkbox"
                value="Follow-Up"
                id="followUp"
                checked={lead.tags.includes("Follow-Up")}
                onChange={handleTagChange}
              />{" "}
              Follow-Up
            </label>
            <br />
            <label htmlFor="hotLead">
              <input
                type="checkbox"
                value="Hot Lead"
                id="hotLead"
                checked={lead.tags.includes("Hot Lead")}
                onChange={handleTagChange}
              />{" "}
              Hot Lead
            </label>
            <br />
            <label htmlFor="interested">
              <input
                type="checkbox"
                value="Interested"
                id="interested"
                checked={lead.tags.includes("Interested")}
                onChange={handleTagChange}
              />{" "}
              Interested
            </label>
            <br />
            <label htmlFor="notInterested">
              <input
                type="checkbox"
                value="Not Interested"
                id="notInterested"
                checked={lead.tags.includes("Not Interested")}
                onChange={handleTagChange}
              />{" "}
              Not Interested
            </label>

            <br />
            <br />
            <label>Time to Close (days)</label>
            <input
              className="form-control"
              type="number"
              name="timeToClose"
              min="1"
              required
              value={lead.timeToClose}
              onChange={handleChange}
            />

            <br />

            <label className="form-label">Priority:</label>
            <select
              required
              value={lead.priority}
              onChange={handleChange}
              className="form-select"
              name="priority">
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <br />

            <button type="submit" className="btn btn-primary">
              Add Lead
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
