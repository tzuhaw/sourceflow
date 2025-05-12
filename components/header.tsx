"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-bottom">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold text-primary">
            Software Recruitment Co.
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/*  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="candidatesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  For candidates
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="candidatesDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Test1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test2
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Test3
                    </a>
                  </li>
                </ul>
              </li>
              {/*  */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="clientsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  For clients
                </a>
                <ul className="dropdown-menu" aria-labelledby="clientsDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Post a Job
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Recruitment Services
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Client Testimonials
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="sectorsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Sectors
                </a>
                <ul className="dropdown-menu" aria-labelledby="sectorsDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Software Engineering
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      DevOps
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Data
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Cyber Security
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="resourcesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Resources
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="resourcesDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Salary Guide
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Industry Reports
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-warning me-2 text-nowrap">
                Upload CV
              </button>
              <button className="btn btn-danger text-nowrap">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
