import AddLead from "../components/AddLead";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function LeadDetails() {
  return (
    <>
      <Header />
      <div className="d-flex flex-wrap gap-3 p-3 align-items-start">
        <Sidebar />
        <div
          className="flex-grow-1 bg-white p-4 rounded shadow"
          style={{ flex: "4 600px" }}>
          <div className="mb-4 fs-3">Lead Management:</div>
          <div className="ps-4 pt-4 fs-5">
            <div>
              <h4>Lead Details</h4>
              <p>
                <strong>Lead Name:</strong>
              </p>
              <p>
                <strong>Sales Agent:</strong>
              </p>
              <p>
                <strong>Lead Source:</strong>
              </p>
              <p>
                <strong>Lead Status</strong>
              </p>
              <p>
                <strong>Priority:</strong>
              </p>
              <p>
                <strong>Time to Close</strong>
              </p>
            </div>
          </div>

          <div className="my-4">
            <button
              className="btn text-white"
              style={{ backgroundColor: displayForm ? "red" : "lightblue" }}>
              {displayForm ? "Remove Edit Form" : "Edit Lead Details"}
            </button>
          </div>

          <h1 className="mb-4 fs-3">Comments Section</h1>
          <div className="border bg-light rounded p-4">
            <div className="bg-light-subtle p-4 rounded mb-4">
              <div className="mb-3 fs-5 font-monospace">
                <span className="bg-dark text-white px-2 py-1 rounded"></span>
                <span className="text-muted"></span>
                <span></span>
              </div>
            </div>

            <form>
              <div className="d-flex flex-wrap gap-3 align-items-baseline">
                <input type="text" className="form-control flex-grow-1" />
                <button className="btn btn-primary">Post</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
