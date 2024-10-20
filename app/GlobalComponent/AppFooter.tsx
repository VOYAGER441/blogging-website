/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styles from "./AppFooter.module.scss";
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";
import Image from "next/image";

const AppFooter = () => {
  return (
    <div className={` ${styles.footerDiv}`}>
      <footer className={`${styles.footerContent} text-black`}>
        <section className={`${styles.socialSection} d-flex justify-content-between p-4`}>
          <div className={styles.socialText}>
            <span>Get connected with us on social networks:</span>
          </div>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.icon}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.icon}>
              <FaTwitter />
            </a>
            <a href="#" className={styles.icon}>
              <FaGoogle />
            </a>
            <a href="#" className={styles.icon}>
              <FaInstagram />
            </a>
            <a href="#" className={styles.icon}>
              <FaLinkedin />
            </a>
            <a href="#" className={styles.icon}>
              <FaGithub />
            </a>
          </div>
        </section>

        <section className={`${styles.infoSection} container mt-5`}>
          <div className="row">
            <div className="col-md-4">
              <Image
                src={"/assets/logo.png"}
                alt="logo"
                width={50}
                height={50}
                className={styles.logoImage}
              />
              <h6 className={styles.title}>Bit By Bit</h6>
              <p className={styles.description}>
                Empower students by sharing bite-sized, insightful computer
                science content on `Bit By Bit,` fostering a community of
                learning and collaboration.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className={styles.title}>Useful Links</h6>
              <ul className={styles.links}>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Shipping Rates</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className={styles.title}>Contact</h6>
              <ul className={styles.contact}>
                <li><FaHome /> New York, NY 10012, US</li>
                <li><FaEnvelope /> info@example.com</li>
                <li><FaPhone /> + 01 234 567 88</li>
                <li><FaPrint /> + 01 234 567 89</li>
              </ul>
            </div>
          </div>
        </section>

        <div className={`${styles.copyright} text-center p-3`}>
          © 2024 Mainak Bandrui | Made with ❤️
        </div>

        <div style={{ zIndex: "-1"}} className={` ${styles.waveBackground}`}>
          <img src="/assets/wave.png" alt="Wave Background" />
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
