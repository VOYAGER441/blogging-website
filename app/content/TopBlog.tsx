/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Link from "next/link"; // Import Link from Next.js
import styles from "./TopBlog.module.scss";
import { FaRegEye } from "react-icons/fa";

const cardData = [
  {
    id: 1,
    title: "John Doe",
    text: "Some example text.",
    buttonLabel: "FREE",
    imageSrc: "/assets/img2.png",
    slug: "path-to-blog",
    popUpText: "Additional information on hover",
  },
  {
    id: 2,
    title: "Jane Smith",
    text: "Another example text.",
    buttonLabel: "SUBSCRIBE",
    imageSrc: "/assets/img3.png",
    slug: "path-to-another-blog",
    popUpText: "More details available here",
  },
  {
    id: 3,
    title: "Alice Brown",
    text: "Learn something new today.",
    buttonLabel: "JOIN",
    imageSrc: "/assets/img3.png",
    slug: "path-to-learn",
    popUpText: "Exclusive content for members",
  },
  {
    id: 4,
    title: "Bob Johnson",
    text: "Insights and stories.",
    buttonLabel: "EXPLORE",
    imageSrc: "/assets/img2.png",
    slug: "path-to-insights",
    popUpText: "Click to know more",
  },
];

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
          {/* Blog Card */}

          {cardData.map((card, key) => (
            <div key={key} className={`${styles.outerDiv}`}>
              <div className={`${styles.innerDiv}`}>
                <Link
                  href={`/Blogs/${card.slug}`}
                  passHref
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className={`card ${styles.cards}`}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className={`card-img-top ${styles.cardImgTop}`}
                      src={card.imageSrc}
                      alt="Card image"
                    />
                    <div className={`card-body ${styles.cardBody}`}>
                      <h4 className={`card-title ${styles.cardTitle}`}>
                        {card.title}
                      </h4>
                      <p className={`card-text ${styles.cardText}`}>
                        {card.text}
                      </p>
                      <button
                        className={`btn btn-primary ${styles.btn}`}
                        style={{ float: "right" }}
                      >
                        {card.buttonLabel}
                      </button>
                    </div>
                    <p className={`${styles.popUpText}`}>{card.popUpText}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* More hot topic button */}
        <div
          className={`mt-4`}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={`/Blog/`} style={{ textDecoration: "none" }} passHref>
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
