import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

function Feature() {
  return (
    <div className={clsx("col")}>
      <div className="text--center padding-horiz--md">
        <p>
          This hands-on course introduces students to prevalent technical tools and skills in the informatics and
          computer science curriculum. Advanced computer literacy is an essential skill that makes students more
          prepared, versatile, and productive. During this course, students will gain experience using the command line,
          version control, package managers, scripting languages, LaTeX, code editors, and more. Students will engage
          with material under the supervision and leadership of upperclassmen. For each unit,
          students are expected to complete a small take-home activity to bolster their understanding
          of the material. After taking this course, students will have a breadth of new skills that will help them
          succeed in future coursework and industry positions. Intended for undergraduate computer science and
          informatics majors. Expected background: CICS 110, INFO 190S, or equivalent programming experience.
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <Feature />
        </div>
      </div>
    </section>
  );
}
