import { NavLink } from "react-router-dom";

const onIsActiveClassLink = ({ isActive }) => `${isActive ? "active" : ""}`;

export const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark shadow-lg"
        aria-label="Eleventh navbar example"
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Album
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample09"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav me-auto mb-xs-2">
              <li className="nav-item">
                <NavLink to="/" className={`nav-link ${onIsActiveClassLink}`}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/add-photo"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  Add Photo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/edit-photo"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  Edit Photo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className={`nav-link ${onIsActiveClassLink}`}
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
