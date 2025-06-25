import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const LeadContext = createContext();

const useLeadContext = () => useContext(LeadContext);

export default useLeadContext;

export function LeadProvider({ children }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLeads();
  }, []);

  async function getLeads(filter = {}) {
    try {
      const queryParams = new URLSearchParams();
      if (filter.salesAgent)
        queryParams.append("salesAgent", filter.salesAgent);
      if (filter.status) queryParams.append("status", filter.status);
      if (filter.priority) queryParams.append("priority", filter.priority);
      if (filter.source) queryParams.append("source", filter.source);

      const url = `https://lead-flow-by-anvaya-backend.vercel.app/leads${
        queryParams.toString() ? `?${queryParams.toString()}` : ""
      }`;

      //console.log("Fetching leads from:", url); //
      const response = await axios.get(url);
      setLeads(response.data);
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  }

  async function addLead(newLead) {
    try {
      const response = await axios.post(
        "https://lead-flow-by-anvaya-backend.vercel.app/leads",
        newLead
      );
      if (response) {
        setLeads((prevLeads) => [...prevLeads, response.data]);
      }
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  }

  async function updateLead(updatedLead, id) {
    try {
      const response = await axios.put(
        `https://lead-flow-by-anvaya-backend.vercel.app/leads/${id}`,
        updatedLead
      );

      // if update is successful, re-fetch all leads from server to reflect changes
      if (response?.status === 200) {
        await getLeads(); // refresh the full list from backend
      }

      // const response = await axios.put(
      //   `https://lead-flow-by-anvaya-backend.vercel.app/leads/${id}`,
      //   updatedLead
      // );
      // if (response) {
      //   setLeads((prevLeads) =>
      //     prevLeads.map((lead) =>
      //       lead._id === id ? { ...lead, ...response.data } : lead
      //     )
      //   );
      // }
    } catch (error) {
      console.error("Error updating lead:", error);
    }
  }

  return (
    <LeadContext.Provider
      value={{ leads, addLead, updateLead, getLeads, loading }}>
      {children}
    </LeadContext.Provider>
  );
}
