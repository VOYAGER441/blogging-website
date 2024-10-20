/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link"; // Import Link from Next.js
import styles from "./TopBlog.module.scss";
import { FaRegEye } from "react-icons/fa";

const TopBlog = () => {
  return (
    <div>
      {/* Heading container */}
      <div className="row">
        <div className="col text-center mb-5">
          <h1
            className="display-4 font-weight-bolder"
            style={{
              boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Hot Topics
          </h1>
          <p className={`${styles.lead}`}>
            Most Trending Topics Which Is Important
          </p>
        </div>
      </div>

      {/* Blogs cards */}
      <div>
        <div className={`container-fluid d-flex ${styles.MainCardDiv}`}>
          {/* Blog Card */}
          <div className={`${styles.outerDiv}`}>
            <Link href="/path-to-blog" passHref style={{textDecoration:"none"}}>
              <div className={`card ${styles.cards}`} style={{ cursor: "pointer" }}>
                <img
                  className={`card-img-top ${styles.cardImgTop}`}
                  src="/assets/img2.png"
                  alt="Card image"
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h4 className={`card-title ${styles.cardTitle}`}>John Doe</h4>
                  <p className={`card-text ${styles.cardText}`}>
                    Some example text.
                  </p>
                  <button
                    className={`btn btn-primary ${styles.btn}`}
                    style={{ float: "right" }}
                  >
                    FREE
                  </button>
                </div>
                <p className={`${styles.popUpText}`}>
                  Additional information on hover
                </p>
              </div>
            </Link>
          </div>

          <div className={`${styles.outerDiv}`}>
            <Link href="/path-to-blog" passHref style={{textDecoration:"none"}}>
              <div className={`card ${styles.cards}`} style={{ cursor: "pointer" }}>
                <img
                  className={`card-img-top ${styles.cardImgTop}`}
                  src="/assets/img2.png"
                  alt="Card image"
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h4 className={`card-title ${styles.cardTitle}`}>John Doe</h4>
                  <p className={`card-text ${styles.cardText}`}>
                    Some example text.
                  </p>
                  <button
                    className={`btn btn-primary ${styles.btn}`}
                    style={{ float: "right" }}
                  >
                    FREE
                  </button>
                </div>
                <p className={`${styles.popUpText}`}>
                  Additional information on hover
                </p>
              </div>
            </Link>
          </div>

          <div className={`${styles.outerDiv}`}>
            <Link href="/path-to-blog" passHref style={{textDecoration:"none"}}>
              <div className={`card ${styles.cards}`} style={{ cursor: "pointer" }}>
                <img
                  className={`card-img-top ${styles.cardImgTop}`}
                  src="/assets/img2.png"
                  alt="Card image"
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h4 className={`card-title ${styles.cardTitle}`}>John Doe</h4>
                  <p className={`card-text ${styles.cardText}`}>
                    Some example text.
                  </p>
                  <button
                    className={`btn btn-primary ${styles.btn}`}
                    style={{ float: "right" }}
                  >
                    FREE
                  </button>
                </div>
                <p className={`${styles.popUpText}`}>
                  Additional information on hover
                </p>
              </div>
            </Link>
          </div>

          <div className={`${styles.outerDiv}`}>
            <Link href="/path-to-blog" passHref style={{textDecoration:"none"}}>
              <div className={`card ${styles.cards}`} style={{ cursor: "pointer" }}>
                <img
                  className={`card-img-top ${styles.cardImgTop}`}
                  src="/assets/img2.png"
                  alt="Card image"
                />
                <div className={`card-body ${styles.cardBody}`}>
                  <h4 className={`card-title ${styles.cardTitle}`}>John Doe</h4>
                  <p className={`card-text ${styles.cardText}`}>
                    Some example text.
                  </p>
                  <button
                    className={`btn btn-primary ${styles.btn}`}
                    style={{ float: "right" }}
                  >
                    FREE
                  </button>
                </div>
                <p className={`${styles.popUpText}`}>
                  Additional information on hover
                </p>
              </div>
            </Link>
          </div>


        </div>
        {/* More hot topic button */}
        <div className={`mt-4`} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link href="/more-topics" style={{textDecoration:"none"}} passHref>
            <button className={`btn btn-warning ${styles.seeMoreBtn}`}>
              <FaRegEye className="mb-1" /> See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
