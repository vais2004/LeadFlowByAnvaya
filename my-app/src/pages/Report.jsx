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
//const COLORS = ["#00C49F", "#FFBB28"];
const COLORS = ["#ffc9bb", "#87cefa"];

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
      <div className="d-flex flex-wrap">
        <Sidebar />
      </div>
      <main className="container-fluid">
        <div className="flex-grow-1 p-4 bg-white rounded shadow">
          <div className="fs-1 mb-4">Reports</div>

          {/* Pie Chart */}
          <h5
            className="bg-secondary text-center text-white py-2 px-2"
            style={{ width: "100%" }}>
            Total Leads: Closed vs In Pipeline
          </h5>
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

          <br />
          <br />

          {/* Bar Chart for last week closed leads */}
          <h5
            className="bg-secondary text-center text-white py-2 px-2"
            style={{ width: "100%" }}>
            Leads Closed by Sales Agent (Last 7 Days)
          </h5>
          <div style={{ width: "100%", height: 350 }}>
            {barData.length === 0 ? (
              <div className="text-muted d-flex align-items-center justify-content-center h-100">
                No data available for the last 7 days.
              </div>
            ) : (
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
                    fill="lavender"
                    name="Closed Leads"
                  />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
          <br />
          <br />

          {/* Status Distribution Bar Chart */}
          <h5
            className="bg-secondary text-center text-white py-2 px-2"
            style={{ width: "100%" }}>
            Leads Status Distribution
          </h5>
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
                <Bar dataKey="value" fill="lightblue" name="Lead Status" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </>
  );
}
