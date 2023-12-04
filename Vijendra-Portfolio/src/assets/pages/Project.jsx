import React from "react";
import Card from "../../components/card/Card";
import styles from "./Project.module.css";
import ProjectImage from "../ProjectOne.png";
import MovieWebsite from "../MovieWebsite.png";
import foodWebsite from "../foodWebsite.png";

function Project() {
  return (
    <div className={styles.ProjectContainer} id="project_section">
      <h1 className={styles.headingOfProject}>Project</h1>
      <Card
        image={ProjectImage}
        FirstDesc={"Created a signIn and login With the help of localstorage"}
        SecondDesc={"Implemented a dynamic data for card's and list's"}
        ThirdDesc={"Using a react  router for pages"}
        TechStack={"React | React router | built-in slider for image"}
        github={"https://github.com/Vijendra2244/Shine"}
        netlify={"https://shineclone001100.netlify.app/"}
      />
      <Card
        image={MovieWebsite}
        FirstDesc={"Created a Movie website with the help of Mock API"}
        SecondDesc={"And using a debouncing and throttling for search"}
        ThirdDesc={"And using a async await for cleaner code"}
        TechStack={"HTML | CSS | JavaScript"}
        github={
          "https://github.com/Vijendra2244/DeboubceAndThrottling/tree/main/DebounceMovieApp"
        }
        netlify={"https://movieapp123123.netlify.app/"}
      />
      <Card
        image={foodWebsite}
        FirstDesc={"Created a Food recipe website with the help of Mock API"}
        SecondDesc={"Fetch the data from Fetch functionality"}
        ThirdDesc={"And using a async await for cleaner code"}
        TechStack={"HTML | CSS | JavaScript"}
        github={
          "https://github.com/Vijendra2244/DeboubceAndThrottling/tree/main/ThrottlingFoodRecipe"
        }
        netlify={"https://foodrecipe01001.netlify.app/"}
      />
    </div>
  );
}

export default Project;
