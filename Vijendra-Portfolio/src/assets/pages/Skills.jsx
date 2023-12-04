import React from "react";
import styles from "./Skills.module.css";
function Skills() {
  return (
    <div id="skills_section">
      <h1 className={styles.skills}>Skills</h1>
      
     
      <div className={styles.skillContainer}>
      <div className={styles.progressbar}>HTML 95%</div>
      <div className={styles.progressbarOne}>CSS 90%</div>
      <div className={styles.progressbarTwo}>JS 85%</div>
      <div className={styles.progressbarThree}>React 80%</div>
      <div className={styles.progressbarThree}>Node.js 80%</div>
      <div className={styles.progressbarThree}>Express 80%</div>
      <div className={styles.progressbarThree}>MongoDB 80%</div>
      <div className={styles.progressbarThree}>Tailwind 80%</div>
     </div>
    </div>
  );
}

export default Skills;
