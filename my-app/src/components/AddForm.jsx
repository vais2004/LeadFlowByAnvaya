import AddLead from "./AddLead";

import { useState } from "react";

export default function AddForm() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <>
      <div className="my-4">
        {displayForm && <AddLead />}
        <button
          className={`btn fs-5 ${
            displayForm ? "btn-outline-danger" : "btn-outline-info"
          }`}
          onClick={() => setDisplayForm(!displayForm)}>
          {displayForm ? "Remove Add Form" : "Add New Lead"}
        </button>
      </div>
    </>
  );
}
