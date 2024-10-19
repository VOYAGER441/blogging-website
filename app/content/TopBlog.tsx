/* eslint-disable @next/next/no-img-element */
import React from "react";
// import Image from "next/image";
import styles from "./TopBlog.module.scss";
// import { IoTimeOutline } from "react-icons/io5";

const TopBlog = () => {
  return (
    <div>
      {/* heading container */}
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

      {/* blogs cords */}
      <div>
        <div className="container-fluid d-flex" style={{columns:"300px"}}>
          {/* 0st card */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>

          {/* 1st */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
          {/* 2nd */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
          {/* 3rd */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
          {/* 4th */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
          {/* 5th */}
          <div className="card" style={{ width: "400px" }}>
            <img
              className="card-img-top"
              src="/assets/img2.png"
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">John Doe</h4>
              <p className="card-text">Some example text.</p>
              <a href="#" className="btn btn-primary">
                See Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
//   <section className={`${styles.wrapper}`}>
//     <div className="container">
//       <div className="row">
//         <div className="col text-center mb-5">
//           <h1
//             className="display-4 font-weight-bolder"
//             style={{
//               boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
//               width: "100%",
//               textAlign: "center",
//             }}
//           >
//             Hot Topics
//           </h1>
//           <p className={`${styles.lead}`}>
//             Most Trending Topics Which Is Important
//           </p>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
//           <div
//             className={` ${styles.card} text-dark ${styles.cardHasBg} click-col`}
//             // style={{
//             //   backgroundImage:
//             //    `url('/assets/logo.png')`,

//             // }}
//           >
//             {/* heading */}
//             <div className={` ${styles.cardImgOverlay} d-flex flex-column`}>
//               <div className={`${styles.cardBody}`}>
//                 <small className={` ${styles.cardMeta} mb-2`}>
//                   Thought Leadership
//                 </small>
//                 <h4 className={` ${styles.cardTitle} mt-0`}>
//                   <a
//                     className="text-dark"
//                     href="https://creativemanner.com"
//                   >
//                     Web Developmet Lorem Ipsum Sit Amet Consectetur dipisi?
//                   </a>
//                 </h4>
//                 {/* blog thumbnail */}
//                 <Image
//               className="card-img"
//               src={"/assets/logo.png"}
//               alt={
//                 "Creative Manner Design Lorem Ipsum Sit Amet }Consectetur dipisi?"
//               }
//               width={100}
//               height={250}
//               />
//             <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
//               </div>

//                 <small>
//                   <IoTimeOutline /> October 15, 2020
//                 </small>
//               </div>
//               <div className={`${styles.cardFooter}`}>
//                 <div className={`${styles.media}`}>
//                   <Image
//                     className="mr-3 rounded-circle"
//                     src={"/assets/logo.png"}
//                     alt={"Generic placeholder image"}
//                     width={50}
//                     height={50}
//                     />
//                   <div className="media-body">
//                     <h6 className="my-0 text-dark d-block">Oz Coruhlu</h6>
//                     <small>Director of UI/UX</small>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
