import axios from "axios";
import useLeadContext from "../context/LeadContext";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddLead({ data }) {
  const { addLead, updateLead } = useLeadContext();

  const [agents, setAgents] = useState([]);

  const [lead, setLead] = useState({
    name: "",
    source: "",
    salesAgent: "",
    status: "",
    tags: [],
    timeToClose: "",
    priority: "",
  });

  useEffect(() => {
    if (data) {
      setLead({
        name: data.name || "",
        source: data.source || "",
        salesAgent: data.salesAgent?._id || "",
        status: data.status || "",
        tags: data.tags || [],
        timeToClose: data.timeToClose || "",
        priority: data.priority || "",
      });
    }
  }, [data]);

  useEffect(() => {
    const fetchAgents = async () => {
      const response = await axios.get(
        "https://lead-flow-by-anvaya-backend.vercel.app/agents"
      );
      setAgents(response.data);
    };
    fetchAgents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prev) => ({
      ...prev,
      [name]:
        name === "timeToClose" ? (value === "" ? "" : Number(value)) : value,
    }));
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
      await updateLead(lead, data._id);
      toast.success("Lead updated successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      await addLead(lead);
      toast.success("New lead added successfully!");

      setLead({
        name: "",
        source: "",
        salesAgent: "",
        status: "",
        tags: [],
        timeToClose: "",
        priority: "",
      });
    }
  };

  return (
    <main className="container-fluid py-3">
      <ToastContainer position="top-right" autoClose={3000} />
      <h3>{data ? "Edit Lead" : "Add New Lead"}</h3>

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
              name="source"
              required>
              <option value="">---Select Source---</option>
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
              name="salesAgent"
              onChange={handleChange}
              required>
              <option value="">---Select---</option>
              {agents.map((agent) => (
                <option key={agent._id} value={agent._id}>
                  {agent.name}
                </option>
              ))}
            </select>
            <br />

            <label className="form-label">Lead Status:</label>
            <select
              required
              value={lead.status}
              onChange={handleChange}
              className="form-select"
              name="status">
              <option value="">---Select Status---</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Proposal Sent">Proposal Sent</option>
              <option value="Closed">Closed</option>
            </select>
            <br />

            <label className="form-label">Tags:</label>
            <br />
            {[
              "High Value",
              "Follow-Up",
              "Hot Lead",
              "Interested",
              "Not Interested",
            ].map((tag) => (
              <div key={tag}>
                <label htmlFor={tag}>
                  <input
                    type="checkbox"
                    name="tags"
                    value={tag}
                    id={tag}
                    checked={lead.tags.includes(tag)}
                    onChange={handleTagChange}
                  />{" "}
                  {tag}
                </label>
              </div>
            ))}

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

            <button type="submit" className="col-2 btn btn-outline-primary">
              {data ? "Update" : "Add"} Lead
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
