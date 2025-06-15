import AddLead from "../components/AddLead";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import useLeadContext from "../context/LeadContext";
import useCommentContext from "../context/CommentContext";

export default function LeadDetails() {
  const { leadId } = useParams();
  const { leads } = useLeadContext();

  const [displayForm, setDisplayForm] = useState(false);
  const [commentText, setCommentText] = useState("");

  const { comments, getAllComments, addComment } = useCommentContext();

  const selectedLead = leads.find((lead) => lead.id == leadId);

  useEffect(() => {
    if (selectedLead?.id) {
      getAllComments(selectedLead.id);
    }
  }, [selectedLead?.id]);

  async function handleSubmitBtn(e) {
    e.preventDefault();
    const comment = {
      commentText,
    };
    await addComment(comment, selectedLead.id);
    setCommentText("");
  }

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
            {selectedLead ? (
              <div>
                <h4>Lead Details</h4>
                <p>
                  <strong>Lead Name: {selectedLead.name}</strong>
                </p>
                <p>
                  <strong>Sales Agent: {selectedLead.salesAgent}</strong>
                </p>
                <p>
                  <strong>Lead Source: {selectedLead.source}</strong>
                </p>
                <p>
                  <strong>Lead Status: {selectedLead.status}</strong>
                </p>
                <p>
                  <strong>Priority: {selectedLead.priority}</strong>
                </p>
                <p>
                  <strong>Time to Close: {selectedLead.timeToClose}</strong>
                </p>
              </div>
            ) : (
              <p>Loading lead details</p>
            )}
          </div>

          {displayForm && <AddLead data={selectedLead} />}

          <div className="my-4">
            <button
              className="btn text-white"
              style={{ backgroundColor: displayForm ? "red" : "lightblue" }}
              onClick={() => {
                setDisplayForm(!displayForm), setReadOnlyInput();
              }}>
              {displayForm ? "Remove Edit Form" : "Edit Lead Details"}
            </button>
          </div>

          <h1 className="mb-4 fs-3">Comments Section</h1>
          <div className="border bg-light rounded p-4">
            <div className="bg-light-subtle p-4 rounded mb-4">
              {comments.length >= 1 ? (
                comments.map((comment, index) => (
                  <div key={index} className="mb-3 fs-5 font-monospace">
                    <span className="bg-dark text-white px-2 py-1 rounded">
                      {comment.author}
                    </span>
                    <br />
                    <span className="text-muted">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                    <br />
                    <span>{comment.commentText}</span>
                  </div>
                ))
              ) : (
                <div>Not commented yet...!!!</div>
              )}
            </div>

            <form onSubmit={handleSubmitBtn}>
              <div className="d-flex flex-wrap gap-3 align-items-baseline">
                <input
                  type="text"
                  className="form-control flex-grow-1"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
