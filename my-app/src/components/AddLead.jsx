export default function AddLead() {
  return (
    <main className="container py-3">
      <h3>Add New Lead</h3>
      <form className="my-4">
        <div className="row g-3">
          <div>
            <label className="form-label">Lead Name:</label>
            <input className="form-control" type="text" />
            <br />

            <label className="form-label">Lead Source:</label>
            <select className="form-select" name="LeadSource">
              <option value="">Select Source</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
            </select>
            <br />

            <label className="form-label">Assigned Sales Agent:</label>
            <input className="form-control" type="text" />
            <br />

            <label className="form-label">Lead Status:</label>
            <select className="form-select" name="leadStatus">
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
              <input type="checkbox" value="High Value" id="highValue" /> High
              Value
            </label>
            <br />
            <label htmlFor="followUp">
              <input type="checkbox" value="Follow-Up" id="followUp" />{" "}
              Follow-Up
            </label>
            <br />
            <label htmlFor="hotLead">
              <input type="checkbox" value="Hot Lead" id="hotLead" /> Hot Lead
            </label>
            <br />
            <label htmlFor="interested">
              <input type="checkbox" value="Interested" id="interested" />{" "}
              Interested
            </label>
            <br />
            <label htmlFor="notInterested">
              <input
                type="checkbox"
                value="Not Interested"
                id="notInterested"
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
            />

            <br />

            <label className="form-label">Priority:</label>
            <select className="form-select" name="priority">
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
