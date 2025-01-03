'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import React, { SetStateAction, useEffect, useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import styles from "./TopBlog.module.scss";
import { FaRegEye } from "react-icons/fa";
import service from "../service";
import {  IBlogResponse } from "../interface/Blog.interface";
import { Subscription } from "rxjs";
import AppLording from "../GlobalComponent/AppLording";

const TopBlog = ({limit}:{limit:number}) => {

  const[cardData,setCardData]=useState<IBlogResponse[]>([]);

  // const [data, setData] = useState<IBlogResponse[]>([]);
  const skip = 0;

  useEffect(() => {
    const subscription: Subscription = service.getAll({ skip, limit }).subscribe({
      next: (response: SetStateAction<IBlogResponse[]>) => {
        if (Array.isArray(response)) {
          setCardData(response);
        } else {
          console.error('Unexpected response format:', response);
          setCardData([]);
        }
      },
      error: (err: any) => console.error('Error fetching blogs:', err),
    });

    return () => subscription.unsubscribe();
  }, [skip, limit]);

  if (!Array.isArray(cardData) || cardData.length === 0) return <AppLording />;

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
                      src={card.thumbnail}
                      alt="Card image"
                    />
                    <div className={`card-body ${styles.cardBody}`}>
                      <h4 className={`card-title ${styles.cardTitle}`}>
                        {card.title}
                      </h4>
                      <p className={`card-text ${styles.cardText}`}>
                        {card.content.heading}
                      </p>
                      <button
                        className={`btn btn-primary ${styles.btn}`}
                        style={{ float: "right" }}
                      >
                        {card.category}
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
          <Link href={`/Top`} style={{ textDecoration: "none" }} passHref>
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
