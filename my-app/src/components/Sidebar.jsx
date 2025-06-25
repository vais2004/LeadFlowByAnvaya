import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-dark min-vw-100 pt-1" style={{ height: "40px" }}>
      <ul className="list-unstyled d-flex  flex-wrap list-unstyled">
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none" to="/">
            <i className="bi bi-clipboard-data-fill">Dashboard</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none" to="/lead/management">
            <i className="bi bi-person-fill">Leads</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none" to="/agent/management">
            <i className="bi bi-person-fill">Agents</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none" to="/reports">
            <i className="bi bi-pie-chart-fill">Reports</i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
