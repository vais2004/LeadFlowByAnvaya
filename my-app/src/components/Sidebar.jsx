import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <div className="p-4 bg-dark text-white rounded shadow">
        <ul class="d-flex flex-wrap list-unstyled p-0">
          <li class="d-flex p-3 fs-5">
            <Link to="/">
              <i className="bi bi-clipboard-data-fill"></i>
            </Link>
          </li>
          <li class="d-flex p-3 fs-5">
            <Link to="/">
              <i className="bi bi-person-fill"></i>
            </Link>
          </li>
          <li class="d-flex p-3 fs-5">
            <Link to="/">
              <i className="bi bi-person-fill"></i>
            </Link>
          </li>
          <li class="d-flex p-3 fs-5">
            <Link to="/">
              <i className="bi bi-pie-chart-fill"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
