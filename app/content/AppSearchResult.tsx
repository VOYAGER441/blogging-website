/* eslint-disable @next/next/no-img-element */


'use client';
import React, { SetStateAction, useEffect, useState } from "react";
import styles from "./AllBlog.module.scss";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { IBlogResponse } from "../interface/Blog.interface";
import { Subscription } from "rxjs";
import service from "../service";
import formatDate from "../utils";
import AppLording from "../GlobalComponent/AppLording";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppSearchResult = ({ searchValue }: { searchValue:any }) => {
  const [data, setData] = useState<IBlogResponse[]>([]);
//   const skip = 0;

  useEffect(() => {
    const subscription: Subscription = service.search({ searchValue }).subscribe({
      next: (response: SetStateAction<IBlogResponse[]>) => {
        if (Array.isArray(response)) {
          setData(response);
        } else {
          console.error('Unexpected response format:', response);
          setData([]);
        }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      error: (err: any) => console.error('Error fetching blogs:', err),
    });

    return () => subscription.unsubscribe();
  }, [searchValue]);

  if (!Array.isArray(data) || data.length === 0) return <AppLording />;

  return (
    <div>
      {/* heading part */}
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

      {data.map((item, key) => (
        <div key={key} className={styles.container}>
          <div className={styles.previewCard}>
            <div className={styles.previewCardWrp}>
              <div className={styles.previewCardImg}>
                <img
                  src={`${item.thumbnail}`}
                  alt="subject logo"
                  style={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className={styles.previewCardContent}>
                <span className={styles.previewCardCode}>{formatDate(item.updatedAt)}</span>
                <h2 className={styles.previewCardTitle}>{item.title}</h2>
                <p className={styles.previewCardText}>
                  {item.popUpText}
                </p>
                <Link href={`/Blogs/${item.slug}`} className={styles.previewCardButton}>
                  READ MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* for more button */}
      <div className={`mt-3`} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Link href="/AllTopics" style={{ textDecoration: "none" }} passHref>
          <button className={`btn btn-warning ${styles.seeMoreBtn}`}>
            <FaRegEye className="mb-1" /> See More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppSearchResult;
