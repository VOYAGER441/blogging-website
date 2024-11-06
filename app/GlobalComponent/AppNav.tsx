/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import styles from "./AppNav.module.scss";

const AppNav = () => {
  return (
    <div>
      <svg
        className={`${styles.svg}`}
        id="wave"
        style={{}}
        viewBox="0 0 1440 330"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 0px)", opacity: "1" }}
          fill="url(#sw-gradient-0)"
          d="M0,165L40,159.5C80,154,160,143,240,165C320,187,400,242,480,242C560,242,640,187,720,165C800,143,880,154,960,148.5C1040,143,1120,121,1200,121C1280,121,1360,143,1440,148.5C1520,154,1600,143,1680,154C1760,165,1840,198,1920,181.5C2000,165,2080,99,2160,82.5C2240,66,2320,99,2400,137.5C2480,176,2560,220,2640,198C2720,176,2800,88,2880,55C2960,22,3040,44,3120,88C3200,132,3280,198,3360,214.5C3440,231,3520,198,3600,170.5C3680,143,3760,121,3840,110C3920,99,4000,99,4080,93.5C4160,88,4240,77,4320,99C4400,121,4480,176,4560,187C4640,198,4720,165,4800,170.5C4880,176,4960,220,5040,225.5C5120,231,5200,198,5280,192.5C5360,187,5440,209,5520,181.5C5600,154,5680,77,5720,38.5L5760,0L5760,330L5720,330C5680,330,5600,330,5520,330C5440,330,5360,330,5280,330C5200,330,5120,330,5040,330C4960,330,4880,330,4800,330C4720,330,4640,330,4560,330C4480,330,4400,330,4320,330C4240,330,4160,330,4080,330C4000,330,3920,330,3840,330C3760,330,3680,330,3600,330C3520,330,3440,330,3360,330C3280,330,3200,330,3120,330C3040,330,2960,330,2880,330C2800,330,2720,330,2640,330C2560,330,2480,330,2400,330C2320,330,2240,330,2160,330C2080,330,2000,330,1920,330C1840,330,1760,330,1680,330C1600,330,1520,330,1440,330C1360,330,1280,330,1200,330C1120,330,1040,330,960,330C880,330,800,330,720,330C640,330,560,330,480,330C400,330,320,330,240,330C160,330,80,330,40,330L0,330Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 50px)", opacity: "0.9" }}
          fill="url(#sw-gradient-1)"
          d="M0,99L40,121C80,143,160,187,240,187C320,187,400,143,480,126.5C560,110,640,121,720,137.5C800,154,880,176,960,181.5C1040,187,1120,176,1200,148.5C1280,121,1360,77,1440,66C1520,55,1600,77,1680,82.5C1760,88,1840,77,1920,82.5C2000,88,2080,110,2160,148.5C2240,187,2320,242,2400,220C2480,198,2560,99,2640,66C2720,33,2800,66,2880,99C2960,132,3040,165,3120,187C3200,209,3280,220,3360,220C3440,220,3520,209,3600,176C3680,143,3760,88,3840,60.5C3920,33,4000,33,4080,55C4160,77,4240,121,4320,137.5C4400,154,4480,143,4560,137.5C4640,132,4720,132,4800,159.5C4880,187,4960,242,5040,253C5120,264,5200,231,5280,209C5360,187,5440,176,5520,165C5600,154,5680,143,5720,137.5L5760,132L5760,330L5720,330C5680,330,5600,330,5520,330C5440,330,5360,330,5280,330C5200,330,5120,330,5040,330C4960,330,4880,330,4800,330C4720,330,4640,330,4560,330C4480,330,4400,330,4320,330C4240,330,4160,330,4080,330C4000,330,3920,330,3840,330C3760,330,3680,330,3600,330C3520,330,3440,330,3360,330C3280,330,3200,330,3120,330C3040,330,2960,330,2880,330C2800,330,2720,330,2640,330C2560,330,2480,330,2400,330C2320,330,2240,330,2160,330C2080,330,2000,330,1920,330C1840,330,1760,330,1680,330C1600,330,1520,330,1440,330C1360,330,1280,330,1200,330C1120,330,1040,330,960,330C880,330,800,330,720,330C640,330,560,330,480,330C400,330,320,330,240,330C160,330,80,330,40,330L0,330Z"
        ></path>
        <defs>
          <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
            <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          style={{ transform: "translate(0, 100px)", opacity: "0.8" }}
          fill="url(#sw-gradient-2)"
          d="M0,66L40,71.5C80,77,160,88,240,93.5C320,99,400,99,480,115.5C560,132,640,165,720,170.5C800,176,880,154,960,165C1040,176,1120,220,1200,214.5C1280,209,1360,154,1440,154C1520,154,1600,209,1680,231C1760,253,1840,242,1920,225.5C2000,209,2080,187,2160,170.5C2240,154,2320,143,2400,148.5C2480,154,2560,176,2640,192.5C2720,209,2800,220,2880,220C2960,220,3040,209,3120,214.5C3200,220,3280,242,3360,225.5C3440,209,3520,154,3600,110C3680,66,3760,33,3840,38.5C3920,44,4000,88,4080,104.5C4160,121,4240,110,4320,88C4400,66,4480,33,4560,66C4640,99,4720,198,4800,220C4880,242,4960,187,5040,165C5120,143,5200,154,5280,159.5C5360,165,5440,165,5520,187C5600,209,5680,253,5720,275L5760,297L5760,330L5720,330C5680,330,5600,330,5520,330C5440,330,5360,330,5280,330C5200,330,5120,330,5040,330C4960,330,4880,330,4800,330C4720,330,4640,330,4560,330C4480,330,4400,330,4320,330C4240,330,4160,330,4080,330C4000,330,3920,330,3840,330C3760,330,3680,330,3600,330C3520,330,3440,330,3360,330C3280,330,3200,330,3120,330C3040,330,2960,330,2880,330C2800,330,2720,330,2640,330C2560,330,2480,330,2400,330C2320,330,2240,330,2160,330C2080,330,2000,330,1920,330C1840,330,1760,330,1680,330C1600,330,1520,330,1440,330C1360,330,1280,330,1200,330C1120,330,1040,330,960,330C880,330,800,330,720,330C640,330,560,330,480,330C400,330,320,330,240,330C160,330,80,330,40,330L0,330Z"
        ></path>
      </svg>
      <div
        className=" navbar navbar-expand-lg "
        style={{
          backgroundColor: "transparent",
          position: "relative",
          zIndex: "99",
        }}
      >
        {/* for logo */}
        <div className="container-fluid ms-4">
          <a className="navbar-brand" href="/">
            <Image
              src={"/assets/logo2.png"}
              alt={"logo"}
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* for navbar */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
              <li className={`nav-item mx-2 ${styles.navOptions}`}>
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className={`nav-item mx-2 ${styles.navOptions}`}>
                <a className="nav-link active" aria-current="page" href="/AllTopics">
                  Topics
                </a>
              </li>
              <li className={`nav-item mx-2 ${styles.navOptions}`}>
                <a className="nav-link active" aria-current="page" href="/Top">
                  Hot Topics
                </a>
              </li>
              <li className={`nav-item mx-2 ${styles.navOptions}`}>
                <a className="nav-link active" aria-current="page" href="/Compiler">
                  Compiler
                </a>
              </li>
              <li className={`nav-item mx-2 ${styles.navOptions}`}>
                <a className="nav-link active" aria-current="page" href="/Auth">
                  Create(Only for Admin)
                </a>
              </li>
            </ul>
            {/* for search box */}
            <div className={`${styles.searchContainer}`}>
              <form className="d-flex me-5 ">
                <div className="input-group">
                  <div className="form-floating" data-mdb-input-init>
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      placeholder="Search"
                      style={{ backgroundColor: "#e0e1dd" }}
                    />
                    <label htmlFor="form1">Search</label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary bg-black"
                    data-mdb-ripple-init
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNav;
