import React from "react";
import {useState} from "react"
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const [searchTerm, setsearchTerm] = useState("")
  const search = () => {
    router.push(`/search/${searchTerm}`);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <a
            className="navbar-brand fw-bold"
            onClick={() => {
              router.push("/");
            }}
          >
            NewsNEXT
          </a>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  onClick={() => {
                    router.push("/feed/business");
                  }}
                >
                  Business
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/sports");
                  }}
                >
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/general");
                  }}
                >
                  General
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/science");
                  }}
                >
                  Science
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/technology");
                  }}
                >
                  Technology
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/health");
                  }}
                >
                  Health
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => {
                    router.push("/feed/entertainment");
                  }}
                >
                  Entertainment
                </a>
              </li>
            </ul>
            <form
              className="form ms-auto d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                search();
              }}
            >
              <input
                className="form-control mr-2 d-block"
                type="search"
                placeholder="Corona ..."
                aria-label="Search"
                onChange={(e) => setsearchTerm(e.target.value)}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 mx-2"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
