import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

//const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FF4444"];
const COLORS = ["#00C49F", "#FFBB28"];

export default function Reports() {
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [statusBarData, setStatusBarData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lead-flow-by-anvaya-backend.vercel.app/report/pipeline")
      .then((res) => {
        const { totalCloseLeads, totalLeadsInPipeline } = res.data;
        setPieData([
          { name: "Closed Leads", value: totalCloseLeads },
          { name: "Pipeline Leads", value: totalLeadsInPipeline },
        ]);
      })
      .catch((error) => {
        console.log("Error fetching lead summary", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://lead-flow-by-anvaya-backend.vercel.app/report/last-week")
      .then((res) => {
        setBarData(res.data);
      })
      .catch((error) => {
        console.log("Error fetching weekly report", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://lead-flow-by-anvaya-backend.vercel.app/report/status-distribution"
      )
      .then((res) => {
        setStatusBarData(res.data);
      })
      .catch((error) => {
        console.log("Error fetching lead status", error);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-wrap gap-3 p-3">
          {/* <Sidebar /> */}
          <div className="flex-grow-1 p-4 bg-white rounded shadow">
            <div className="fs-1 mb-4">Reports</div>

            {/* Pie Chart */}
            <h3
              className="bg-dark text-white p-3 mb-3"
              style={{ width: "275px" }}>
              Total Leads: Closed vs In Pipeline
            </h3>
            <div style={{ width: "100%", height: 500 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Tooltip />
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, percent }) =>
                      `${name}: ${(percent * 100).toFixed(0)}%`
                    }
                    fill="#8884d8"
                    dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart for last week closed leads */}
            <h3
              className="bg-dark text-white p-3 mt-4 mb-3"
              style={{ width: "340px" }}>
              Leads Closed by Sales Agent (Last 7 Days)
            </h3>
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>
                <BarChart
                  data={barData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="salesAgent" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="closedLeads"
                    fill="orange"
                    name="Closed Leads"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Status Distribution Bar Chart */}
            <h3
              className="bg-dark text-white p-3 mt-4 mb-3"
              style={{ width: "210px" }}>
              Leads Status Distribution
            </h3>
            <div style={{ width: "100%", height: 350 }}>
              <ResponsiveContainer>
                <BarChart
                  data={statusBarData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="label" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="blue" name="Lead Status" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
