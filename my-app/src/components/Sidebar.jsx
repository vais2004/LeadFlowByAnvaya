import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className=" min-vw-100 pt-1"
      style={{ height: "45px", backgroundColor: "#9daabe" }}>
      <ul className="list-unstyled d-flex  flex-wrap list-unstyled">
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none text-dark ms-5" to="/">
            <i class="bi bi-clipboard2-data"> Dashboard</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link
            className="text-decoration-none text-dark"
            to="/lead/management">
            <i class="bi bi-handbag"> Leads</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link
            className="text-decoration-none text-dark"
            to="/agent/management">
            <i class="bi bi-person"> Agents</i>
          </Link>
        </li>
        <li className="d-flex mx-3 fs-5 ">
          <Link className="text-decoration-none text-dark" to="/reports">
            <i class="bi bi-pie-chart"> Reports</i>
          </Link>
        </li>
      </ul>
    </div>
  );
}
