import AddLead from "./AddLead";

import { useState } from "react";

export default function AddForm() {
  const [displayForm, setDisplayForm] = useState(false);
  return (
    <>
      <div style={{fontFamily:'cursive'}} className="my-4">
        {displayForm && <AddLead />}
        <button
          className={`btn text-white fs-5 ${
            displayForm ? "btn-danger" : "btn-info"
          }`}
          onClick={() => setDisplayForm(!displayForm)}>
          {displayForm ? "Remove Add Form" : "Add New Lead"}
        </button>
      </div>
    </>
  );
}
