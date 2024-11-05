/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaPrint
} from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import styles from "./AppFooter.module.scss";


const AppFooter = () => {
  
  // let date=new Date();

  return (
    <div className={` ${styles.footerDiv}`}>
      <footer className={`${styles.footerContent} text-black`}>
        <section className={`${styles.socialSection} d-flex justify-content-between p-4`}>
          <div className={styles.socialText}>
            <span>Get connected with us on social networks:</span>
          </div>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com/mainak.banduri.37/" className={styles.icon}>
              <FaFacebookF />
            </a>
            <a href="https://x.com/voyager_mainak" className={styles.icon}>
              <FaXTwitter />
            </a>
            <a href="www.google.com/voyagerwebteams@gmail.com" className={styles.icon}>
              <FaGoogle />
            </a>
            <a href="https://www.instagram.com/mainak_banduri/" className={styles.icon}>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/mainak-banduri-239808237/" className={styles.icon}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/VOYAGER441" className={styles.icon}>
              <FaGithub />
            </a>
          </div>
        </section>

        <section className={`${styles.infoSection} container mt-5`}>
          <div className="row">
            <div className="col-md-4">
              <Image
                src={"/assets/logo2.png"}
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
                <li><a href="https://www.wikipedia.org/">wikipedia</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Shipping Rates</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6 className={styles.title}>Contact</h6>
              <ul className={styles.contact}>
                <li><FaHome /> West Bengal,India </li>
                <li><FaEnvelope /><a href="mailto:voyagerwebteams@gmail.com" style={{textDecoration:"none", color:"black"}}> voyagerwebteams@gmail.com</a> </li>
                <li><FaPhone /> +91 9831441777</li>
                <li><FaPrint /> + 01 234 567 89</li>
              </ul>
            </div>
          </div>
        </section>

        <div className={`${styles.copyright} text-center p-3`}>
          © {new Date().getFullYear()} Mainak Banduri | Made with ❤️
        </div>

        <div style={{ zIndex: "-1"}} className={` ${styles.waveBackground}`}>
          <img src="/assets/wave.png" alt="Wave Background" />
        </div>
      </footer>
    </div>
  );
};

export default AppFooter;
