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
  ResponsiveContainer
} from "recharts";
import axios from "axios";

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE", "#FF4444"];

const Reports = () => {
 
  return (
    <>
      <Header />
      <main>
        <div className="d-flex flex-wrap">
          <Sidebar />
          <div className="flex-grow-1 p-4">
            <h2 className="fw-bold mb-4">Reports</h2>

            {/* Pie Chart */}
            <div className="mb-5">
              <h5 className="bg-dark text-white p-3 rounded w-fit">Total Leads: Closed vs In Pipeline</h5>
              <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={dataPieChart}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dataPieChart.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bar Chart by Sales Agent */}
            <div className="mb-5">
              <h5 className="bg-dark text-white p-3 rounded w-fit">Leads Closed by Sales Agent (Last 7 Days)</h5>
              <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer>
                  <BarChart data={dataBarChart} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="salesAgent" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="closedLeads" fill="orange" name="Closed Leads" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Status Distribution */}
            <div>
              <h5 className="bg-dark text-white p-3 rounded w-fit">Leads Status Distribution</h5>
              <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer>
                  <BarChart data={dataStatusBarChart} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        </div>
      </main>
    </>
  );
};

export default Reports;
