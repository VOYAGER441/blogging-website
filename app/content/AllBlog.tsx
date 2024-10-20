/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./AllBlog.module.scss";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";

const AllBlog = () => {
  return (
    <div>
      {/* heading part*/}
      <div className="row">
        <div className="col text-center mt-2">
          <h1
            className={`display-4 font-weight-bolder ${styles.Heading}`}
            style={{
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
              width: "100%",
              textAlign: "center",
            }}
          >
            All Blogs
          </h1>
          <p className={`${styles.lead}`}>
            All Trending Blogs Which Is Important
          </p>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.previewCard}>
          <div className={styles.previewCardWrp}>
            <div className={styles.previewCardImg}>
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt="Autumn Leaves"
              />
            </div>
            <div className={styles.previewCardContent}>
              {/* <span className={styles.previewCardCode}>26 December 2019</span> */}
              <h2 className={styles.previewCardTitle}>Lorem Ipsum Dolor</h2>
              <p className={styles.previewCardText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </p>
              <a href="#" className={styles.previewCardButton}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.previewCard}>
          <div className={styles.previewCardWrp}>
            <div className={styles.previewCardImg}>
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt="Autumn Leaves"
              />
            </div>
            <div className={styles.previewCardContent}>
              {/* <span className={styles.previewCardCode}>26 December 2019</span> */}
              <h2 className={styles.previewCardTitle}>Lorem Ipsum Dolor</h2>
              <p className={styles.previewCardText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </p>
              <a href="#" className={styles.previewCardButton}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.previewCard}>
          <div className={styles.previewCardWrp}>
            <div className={styles.previewCardImg}>
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt="Autumn Leaves"
              />
            </div>
            <div className={styles.previewCardContent}>
              {/* <span className={styles.previewCardCode}>26 December 2019</span> */}
              <h2 className={styles.previewCardTitle}>Lorem Ipsum Dolor</h2>
              <p className={styles.previewCardText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </p>
              <a href="#" className={styles.previewCardButton}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.previewCard}>
          <div className={styles.previewCardWrp}>
            <div className={styles.previewCardImg}>
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt="Autumn Leaves"
              />
            </div>
            <div className={styles.previewCardContent}>
              {/* <span className={styles.previewCardCode}>26 December 2019</span> */}
              <h2 className={styles.previewCardTitle}>Lorem Ipsum Dolor</h2>
              <p className={styles.previewCardText}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Recusandae voluptate repellendus magni illo ea animi?
              </p>
              <a href="#" className={styles.previewCardButton}>
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* for more button */}
      <div className={`mt-3`} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Link href="/more-topics" style={{textDecoration:"none"}} passHref>
            <button className={`btn btn-warning ${styles.seeMoreBtn}`}>
              <FaRegEye className="mb-1" /> See More
            </button>
          </Link>
        </div>
      
    </div>
  );
};

export default AllBlog;
