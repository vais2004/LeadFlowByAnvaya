import React from 'react';
const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand fs-1" style={{fontFamily:'cursive'}} href="/">
           <i>Anvaya</i>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="container">
//       <nav className="navbar navbar-expand-lg bg-light py-3">
//         <div className="container-fluid">
//           <Link className="navbar-brand fw-bold fs-1" to="/">
//             Anvaya
//           </Link>
//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/lead/management">Leads</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/agent/management">Agents</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/reports">Reports</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

