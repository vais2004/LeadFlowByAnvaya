// import { createContext, useState, useEffect, useContext } from "react";
// import axios from "axios";

// const SalesAgentContext = createContext();

// const useSalesAgentContext = () => useContext(SalesAgentContext);

// export default useSalesAgentContext;

// export function SalesAgentProvider({ children }) {
//   const [agents, setAgents] = useState([]);

//   useEffect(() => {
//     async function fetchAgents() {
//       try {
//         const response = await axios.get(
//           "https://lead-flow-by-anvaya-backend.vercel.app/agents"
//         );
//         setAgents(response.data);
//       } catch (error) {
//         console.log("failed to fetch agents:", error);
//       }
//     }
//     fetchAgents();
//   }, []);

//   async function addAgent(newAgent) {
//     try {
//       const response = await axios.post(
//         "https://lead-flow-by-anvaya-backend.vercel.app/agents",
//         newAgent
//       );

//       if (response) {
//         setAgents((prevAgents) => [...prevAgents, response.data])
//       }
//     } catch (error) {
//       console.log("error while saving agent:", error);
//     }
//   }

//   return (
//     <SalesAgentContext.Provider value={{ agents, addAgent }}>
//       {children}
//     </SalesAgentContext.Provider>
//   );
// }


import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const SalesAgentContext = createContext();

const useSalesAgentContext = () => useContext(SalesAgentContext);

export default useSalesAgentContext;

export function SalesAgentProvider({ children }) {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    async function fetchAgents() {
      try {
        const response = await axios.get(
          "https://lead-flow-by-anvaya-backend.vercel.app/agents"
        );
        setAgents(response.data);
      } catch (error) {
        console.log("failed to fetch agents:", error);
      }
    }
    fetchAgents();
  }, []);

  async function addAgent(newAgent) {
    try {
      const response = await axios.post(
        "https://lead-flow-by-anvaya-backend.vercel.app/agents",
        newAgent
      );

      if (response?.data) {
        setAgents((prevAgents) => [...prevAgents, response.data]);
      }
    } catch (error) {
      console.log("error while saving agent:", error);
    }
  }

  return (
    <SalesAgentContext.Provider value={{ agents, addAgent }}>
      {children}
    </SalesAgentContext.Provider>
  );
}

