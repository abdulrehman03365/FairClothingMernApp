import { Link } from "react-router-dom";
function AdminHeader() {
    return ( <>

<header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                Admin Panel
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse-navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/manageMarques">
                      Manage Marques
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manage-partners">
                      Manage Partners
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manage-account">
                      Manage Account
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </> );
}

export default AdminHeader;