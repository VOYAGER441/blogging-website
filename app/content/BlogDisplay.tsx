/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import styles from './BlogDisplay.module.scss'

const BlogDisplay = ({ slug }: { slug: string }) => {
  return (
    <div>
      <div className="container-fluid" style={{ width: "95%" }}>
        <div className="card mb-3 d-flex" style={{ borderRadius: "20px" }}>
          {/* Image Part */}
          <div className="d-flex justify-content-center align-items-center mt-4">
            <div
              className={`card bg-dark text-white `}
              style={{ width: "90%", borderRadius: "20px" }}
            >
              <img
                src="/assets/img2.png"
                className={`card-img-top img`}
                alt="Blog Image"
                style={{
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "20px",
                }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title">{slug}</h5>
                <p className="card-text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>

          {/* Card Body Part */}
          <div
            className="d-flex justify-content-center align-items-center mt-2 mb-4"
            style={{}}
          >
            <div
              className="card"
              style={{ width: "89%", borderRadius: "15px 50px" }}
            >
              <div className="card-body">
                <h3 className="card-title">Heading</h3>
                <h6 className="card-title">Subheading</h6>
                <p className="card-text" style={{ columns: "300px" }}>
                  {/* Truncated long content */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  efficitur ligula eget dolor elementum, vel ultrices ante
                  bibendum. Phasellus semper dignissim tortor, et elementum ante
                  pellentesque ac. Nam mattis eu ligula a consequat. Etiam
                  ornare sem viverra nibh consequat condimentum. Maecenas vitae
                  velit at elit tempus dapibus. Curabitur condimentum a turpis
                  ut posuere. Fusce sollicitudin justo vel aliquam aliquet.
                  Quisque quis lacinia dolor. Maecenas finibus ex non ante
                  cursus, facilisis accumsan massa laoreet. Sed porttitor
                  pellentesque feugiat. In fermentum lectus nec dignissim
                  egestas. Suspendisse eget justo scelerisque, egestas magna
                  rhoncus, egestas ante. Integer massa lectus, luctus vel
                  tincidunt id, laoreet eu tellus. Proin mollis mi a sapien
                  maximus sagittis. Vestibulum ornare finibus arcu eu egestas.
                  Vivamus at facilisis justo. Etiam libero eros, sodales a
                  euismod nec, porttitor id mauris. Nunc condimentum nisl vel
                  malesuada molestie. Quisque nisi arcu, semper at dui in,
                  placerat lacinia elit. Phasellus volutpat condimentum
                  bibendum. Vestibulum nulla tellus, pharetra maximus elit sed,
                  eleifend pharetra odio. Aenean mattis cursus magna nec
                  iaculis. Donec a malesuada velit. Etiam tincidunt non orci id
                  auctor. Aenean massa nisi, aliquam sit amet tellus ac, euismod
                  suscipit ante. Phasellus at elit diam. Nam in libero nec ipsum
                  facilisis varius. Suspendisse sed felis lectus. Donec feugiat
                  dictum congue. Duis eget euismod odio, nec facilisis velit.
                  Donec ut elementum eros. Phasellus tincidunt lectus sed sapien
                  ullamcorper blandit. Mauris porta auctor auctor. Integer nec
                  nisi tempor, convallis eros ac, commodo ipsum. Ut convallis et
                  tortor pulvinar tempor. Praesent pretium est purus, tincidunt
                  congue justo maximus eu. Nam sed diam vitae arcu pulvinar
                  ultrices. Curabitur ullamcorper eleifend odio ut egestas.
                  Phasellus eget libero posuere tortor volutpat fermentum eget
                  sed quam. Vestibulum sagittis convallis nulla in venenatis.
                  Aenean posuere, mauris sit amet fringilla pellentesque, risus
                  felis tristique velit, vel scelerisque enim mauris ac urna.
                  Phasellus orci felis, luctus eu pellentesque non, pretium
                  condimentum ipsum. Nam id nibh quis leo placerat aliquam.
                  Vestibulum vel ante odio. Suspendisse tristique ultrices purus
                  quis dignissim. Donec accumsan leo sed mi placerat, et finibus
                  arcu fermentum. Ut maximus fermentum magna, sed condimentum
                  massa tincidunt a. Nam eget elit et metus tincidunt
                  ullamcorper a in turpis. Fusce porta, felis nec finibus
                  euismod, orci dolor elementum enim, nec molestie dui purus ut
                  nisl. Quisque pretium tincidunt aliquam. Quisque commodo
                  aliquet mauris non molestie. Sed varius mi dui, eu lacinia
                  augue hendrerit eu. Aenean laoreet vestibulum magna, eu
                  placerat nisi eleifend nec. Proin lacinia ex at tincidunt
                  ultricies. Aliquam mattis nunc nec nisi consectetur, in
                  ultrices lorem suscipit.
                </p>
                {/* Author Name */}
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
                      By:- Mainak Banduri
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
