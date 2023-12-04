import React from "react";
import styles from "./Home.module.css";
import myImage from "../../assets/VijendraChouhan.png";
import myResume from "../../assets/Vijendra Chouhan-cap05_205-Frontend Developer(React) (1).pdf";
import { FaLinkedin } from "react-icons/fa";
import {FaGithub} from "react-icons/fa"
function Home() {
  return (
    <>
      <div id="home_section" className={styles.containerOfHomeSection}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={myImage} />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.headingName}>
            <span className={styles.nameOfAdmin}>I'M VIJENDRA CHOUHAN.</span>{" "}
            <br /> FRONT-END DEVELOPER
          </h1>

          <a href={myResume} download>
            <button className={styles.resumeButton}>Resume</button>
          </a>
          <div className={styles.accountOfSocialMedia}>
            <a href="https://github.com/Vijendra2244" target="_blank">
              <button className={styles.socialMediaIcon}>
                <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/vijendra-chouhan-989687292/"
              target="_blank"
            >
              <button className={styles.socialMediaIcon}>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
