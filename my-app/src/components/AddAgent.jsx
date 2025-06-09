export default function AddAgent() {
  return (
    <>
      <form className="my-3">
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" />
          </div>
          <br />
          <div className="col-md-6">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" />
          </div>
          <button className="btn btn-dark">Submit</button>
        </div>
      </form>
    </>
  );
}
