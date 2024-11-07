/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';
import React, { useEffect, useState } from "react";
import service from "../service";
import { IBlogResponse } from "../interface/Blog.interface";
import { Subscription } from "rxjs";
import formatDate from "../utils";
import AppLording from "../GlobalComponent/AppLording";
// import { GiKetchup } from "react-icons/gi";

const BlogDisplay = ({ slug }: { slug: string }) => {
  const [cardData, setCardData] = useState<IBlogResponse | null>(null);

  useEffect(() => {
    const subscription: Subscription = service
      .getDataBySlug({ slug })
      .subscribe({
        next: (response: IBlogResponse) => setCardData(response),
        error: (err: any) => console.error("Error fetching blog:", err),
      });

    return () => subscription.unsubscribe();
  }, [slug]);

  if (!cardData) return <AppLording/>;

  return (
    <div className="container-fluid" style={{ width: "95%" }}>
      <div className="card mb-3 d-flex" style={{ borderRadius: "20px" }}>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <div className="card bg-dark text-white" style={{ width: "90%", borderRadius: "20px" }}>
            <img
              src={`${cardData.thumbnail}`}
              className="card-img-top img"
              alt="Blog Image"
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "20px",
              }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h5 className="card-title">{cardData.title}</h5>
              <p className="card-text">{cardData.popUpText}</p>
              <p className="card-text">{formatDate(cardData.updatedAt)}</p>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-2 mb-4">
          <div className="card" style={{ width: "89%", borderRadius: "15px 50px" }}>
            <div className="card-body">
              <h3 className="card-title">{cardData.content.heading}</h3>
              <h6 className="card-title">{cardData.content.subheading}</h6>
              <p className="card-text" style={{ columns: "300px" }}>
                {cardData.content.detailsContent}
              </p>

              <div className="mb-5 me-3">
                <p className="card-text float-start">
                  <small
                    className="text-muted"
                    style={{
                      
                     fontSize:"1rem",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                   <mark>Tags:</mark>{cardData.tags.map((tag,key)=>(
                    <span key={key} className="badge rounded-pill bg-info text-dark" style={{marginLeft:"5px"}}>{tag}</span>
                   ))}
                  </small>
                </p>
              </div>

              <div className="mb-5 me-3">
                <p className="card-text float-start">
                  <small
                    className="text-muted"
                    style={{
                      
                     fontSize:"1rem",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                   <mark>Links:</mark>{cardData.links.map((link,key)=>(
                    <span key={key} className="badge rounded-pill bg-info text-dark" style={{marginLeft:"5px"}}><a href={`${link}`} target="blank" color="black">{link}</a></span>
                   ))}
                  </small>
                </p>
              </div>

              <div className="mb-5 me-3">
                <p className="card-text float-end">
                  <small
                    className="text-muted"
                    style={{
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      backgroundColor: "orange",
                      borderRadius: "5px",
                      padding: "5px 10px",
                    }}
                  >
                    By: {cardData.author}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
