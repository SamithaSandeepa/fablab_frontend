import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { uselocation } from "next/location";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../actions/auth";
import { MDBIcon } from "mdb-react-ui-kit";

const NavBar = () => {
  const location = useLocation();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    alert("hello logging out");
  };

  const authLinks = (
    <>
      <li className="nav-item px-3">
        <NavLink to="/#">
          <a
            className={
              location.pathname === "/#" ? "nav-link active" : "nav-link"
            }
          >
            Dashboard
          </a>
        </NavLink>
      </li>

      {/* home Pages */}

      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Home Pages
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item dropdown px-3">
            <li className="nav-item px-3">
              <NavLink to="/">
                <a
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </a>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/industrytec">
                <a
                  className={
                    location.pathname === "/industrytec"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Industry 4.0 Technologies
                </a>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/education">
                <a
                  className={
                    location.pathname === "/education"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Education
                </a>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/#">
                <a
                  className={
                    location.pathname === "/project"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Project
                </a>
              </NavLink>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/contact">
                <a
                  className={
                    location.pathname === "/contect"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  Contect Us
                </a>
              </NavLink>
            </li>
            <li className="nav-item dropdown px-3">
              <button className="peer bg-transparent hover:bg-green-700 border-none text-slate-400 outline-none">
                FabLab
              </button>
              <div
                className="hidden peer-hover:flex hover:flex
                          w-[200px] ml-5
                          flex-col bg-transparent drop-shadow-lg "
              >
                <a className="no-underline" href="/fablabs/makadura">
                  makadura
                </a>
              </div>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDropdownMenuLink1"
              >
                <li className="dropdown-item px-2">
                  <NavLink to="/fablabs/makadura">
                    <a
                      className={
                        location.pathname === "/fablabs/makadura"
                          ? "nav-link active"
                          : "nav-link"
                      }
                    >
                      FabLab Makadura
                    </a>
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item px-3">
              <NavLink to="/about">
                <a
                  className={
                    location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  About Us
                </a>
              </NavLink>
            </li>
          </li>
        </ul>
      </li>

      {/* News admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          News Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <NavLink to="/admin/news/add">
              <a
                className={
                  location.pathname === "/admin/news/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add News
              </a>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/admin/news/all">
              <a
                className={
                  location.pathname === "/admin/news/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                News
              </a>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* PastEvent admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Past Event Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <NavLink to="/admin/pastevents/add">
              <a
                className={
                  location.pathname === "/admin/pastevents/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add Event
              </a>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/admin/pastevents/all">
              <a
                className={
                  location.pathname === "/admin/pastevents/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Past Events
              </a>
            </NavLink>
          </li>
        </ul>
      </li>

      {/* OurProject admin pannel links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          OurProject Details
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <NavLink to="/admin/ourproject/add">
              <a
                className={
                  location.pathname === "/admin/ourproject/add"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Add OurProject
              </a>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <NavLink to="/admin/ourproject/all">
              <a
                className={
                  location.pathname === "/admin/ourproject/all"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                OurProject
              </a>
            </NavLink>
          </li>
        </ul>
      </li>

      <li className="nav-item px-3">
        <NavLink to="/fabtech">
          <a
            className={
              location.pathname === "/fabtech" ? "nav-link active" : "nav-link"
            }
          >
            FabTech Event
          </a>
        </NavLink>
      </li>

      {/* logout and register links */}
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Login
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item px-3">
            <NavLink to="/admin/register">
              <a
                className={
                  location.pathname === "/admin/register"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Register
              </a>
            </NavLink>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#!" onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav-item px-3">
        <NavLink to="/">
          <a
            className={
              location.pathname === "/#" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </a>
        </NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink to="/about">
          <a
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About Us
          </a>
        </NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink to="/industrytec">
          <a
            className={
              location.pathname === "/industrytec"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Industry 4.0 Technologies
          </a>
        </NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink to="/education">
          <a
            className={
              location.pathname === "/education"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Education
          </a>
        </NavLink>
      </li>
      <li className="nav-item px-3">
        <NavLink to="/#">
          <a
            className={
              location.pathname === "/project" ? "nav-link active" : "nav-link"
            }
          >
            Project
          </a>
        </NavLink>
      </li>
      <li className="nav-item dropdown px-3 ">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          FabLabs
        </a>
        <ul
          className="dropdown-menu dropdown-menu-dark"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li className="nav-item dropdown px-2">
            <NavLink to="/fablabs/makadura">
              <a
                className={
                  location.pathname === "/fablabs/makadura"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                FabLab Makadura
              </a>
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="nav-item px-3">
        <NavLink to="/contact">
          <a
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Us
          </a>
        </NavLink>
      </li>
      <li className="nav-item px-3 ">
        <NavLink to="/fabtech">
          <a
            className={
              location.pathname === "/fabtech" ? "nav-link active" : "nav-link"
            }
          >
            FabTech Event
          </a>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav
      className={`py-3 navbar navbar-expand-lg navbar-dark bg-[#06283D] sticky-sm-top`}
    >
      <div className="container-fluid">
        <img
          src="https://fablanka-website.s3.ap-southeast-1.amazonaws.com/images/24x24.png"
          width={32}
          height={32}
          className=""
        />
        <NavLink to="#">
          <a className="navbar-brand pl-4">FabLanka</a>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <MDBIcon fas icon="bars" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">{guestLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
