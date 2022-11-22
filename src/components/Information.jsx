import styles from "../styles/Information.module.scss";
import { DeviceMobile, MapPin, UserSquare } from "phosphor-react";
import Skill from "./Skill";

export function Information() {
  const person = {
    skills: [
      { name: "Report Findings", amount: "90" },
      { name: "Lab Research", amount: "80" },
      { name: "Lab Testing", amount: "70" },
      { name: "Presentation", amount: "50" },
      { name: "Analysis", amount: "90" },
      { name: "Test Proposals", amount: "80" },
      { name: "Chemistry", amount: "70" },
      { name: "Experimentation", amount: "50" },
    ],
  };
  return (
    <aside className={styles.information}>
      <section className={styles.information__contact}>
        <ul>
          <li>
            <MapPin color={"#f6b64c"} />
            8001 Tilda Lane, Monseil, NY.
          </li>
          <li>
            <DeviceMobile color={"#f6b64c"} />
            1-905-509-5900
          </li>
          <li>
            <UserSquare color={"#f6b64c"} />
            afournier@uwaterloo.com
          </li>
        </ul>
      </section>
      <section className={styles.information__education}>
        <h2>Education</h2>
        <p>
          <strong>University of Waterloo</strong>
          <span>2020-2024</span>
          Bachelor of Sciences, Environmental Sciences Specialist
        </p>
      </section>
      <section className={styles.information__experience}>
        <h2>Co-op Placement Experience</h2>
        <div>
          <strong>Lyfe Science Co-op</strong>
          <span>2022 Lab Technician</span>
          <ul>
            <li>
              Carried out everyday tasks as part of ongoing research study
            </li>
            <li>
              Reported findings, contributed hypothesis and help co-author a
              professional findings report
            </li>
          </ul>
        </div>
        <div>
          <strong>Geology Point</strong>
          <span>2023 Field Technician</span>
          <ul>
            <li>Tested water samples around the world</li>
            <li>Drew conclusions based on highly-controlled experimentation</li>
            <li>Presented findings at a Water Stewardship Conferece</li>
          </ul>
        </div>
      </section>
      <section className={styles.information__skills}>
        <h2>Skills & Expertise</h2>
        <div className={styles.skills__slider}>
          {person["skills"].map((skill) => (
            <Skill key={skill.name} skill={skill.name} amount={skill.amount} />
          ))}
        </div>
      </section>
    </aside>
  );
}
