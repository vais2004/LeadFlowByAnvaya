import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import AddLead from "./components/AddLead";
import SalesAgentManagement from "./pages/SalesAgentManagement";
import LeadDetails from "./pages/LeadDetails";
import Reports from "./pages/Report";
//import LeadByStatus from "./pages/LeadByStatus";
import LeadManagement from "./pages/LeadManagement";
import LeadBySalesAgent from "./pages/LeadBySalesAgents";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SalesAgentProvider } from "./context/SalesAgentContext";
import { LeadProvider } from "./context/LeadContext";
import { CommentProvider } from "./context/CommentContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-lead",
    element: <AddLead />,
  },
  {
    path: "/lead/management",
    element: <LeadManagement />,
  },
  {
    path: "/agent/management",
    element: <SalesAgentManagement />,
  },
  {
    path: "/lead/details/:leadId",
    element: <LeadDetails />,
  },
  // {
  //   path: "/lead/status/:status",
  //   element: <LeadByStatus />,
  // },
  {
    path: "/lead/sales-agent/:salesAgent/:name",
    element: <LeadBySalesAgent />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SalesAgentProvider>
      <LeadProvider>
        <CommentProvider>
          <RouterProvider router={router} />
        </CommentProvider>
      </LeadProvider>
    </SalesAgentProvider>
  </StrictMode>
);
